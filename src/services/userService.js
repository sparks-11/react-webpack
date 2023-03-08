import api from '../api';

const registerUser = async (url, data) => {
  return await api.registerUser(url, data);
  //   after responce if data is needed we need to dispatch from here to redux
};

export default {
  registerUser,
};
