import axios from 'axios';
import { localStorageKey } from '../constants';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:1234/api';

export default {
  fetchData: (url) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${apiUrl}/${url}`, {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'Bearer "heregoes the token from local storage key"',
          },
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  insertData: (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${apiUrl}/${url}`, data, {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'Bearer "heregoes the token from local storage key"',
          },
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  updateData: (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${apiUrl}/${url}`, data, {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'Bearer "heregoes the token from local storage key"',
          },
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  deleteData: (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${apiUrl}/${url}`, data, {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'Bearer "heregoes the token from local storage key"',
          },
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  patchData: (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${apiUrl}/${url}`, data, {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'Bearer "heregoes the token from local storage key"',
          },
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  loginUser: (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${apiUrl}/${url}`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  registerUser: (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${apiUrl}/${url}`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    new Promise((resolve, reject) => {
      const originalRequest = error.config;
      const refereshToken = localStorage.getItem('get token from local storage');
      if (
        error.response &&
        error.response.status === 408 &&
        error.config &&
        !error.config.__isRetryRequest &&
        refereshToken
      ) {
        originalRequest._retry = true;

        const response = fetch(`${apiUrl}/auth/refereshToken`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'here goes the referesh token',
          },
        })
          .then((res) => {
            if (!res.ok) {
              localStorage.clear();
              // window.location.reload()
              throw new Error(`HTTP status ${res.status}`);
            }
            return res.json();
          })
          .then((res) => {
            if (res?.AuthenticationResult?.AccessToken)
              localStorage.setItem(localStorageKey.token, res.AuthenticationResult.AccessToken);
            if (res?.AuthenticationResult?.RefereshToken)
              localStorage.setItem(
                localStorageKey.refreshToken,
                res.AuthenticationResult.RefereshToken
              );
            // Requesting again with Updated tokens
            originalRequest.headers['x-access-token'] = res.AuthenticationResult.AccessToken;
            originalRequest.headers['x-access-token-type'] = res.AuthenticationResult.TokenType;
            return axios(originalRequest);
          })
          .catch(() => {
            localStorage.clear();
            // window.location.reload();
          });
        resolve(response);
      } else {
        return reject(error);
      }
    });
  }
);
