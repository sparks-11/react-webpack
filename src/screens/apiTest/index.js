import React, { useState } from 'react';
import userService from '../../services/userService';

const ApiTest = () => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  const handleCreateUser = () => {
    const data = {
      userName,
      password: userPass,
    };
    userService
      .registerUser('/test', data)
      .then((res) => {
        console.log('success', res);
        alert(`register success`, res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type={'text'}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="name"
      />
      <input
        type={'password'}
        value={userPass}
        onChange={(e) => setUserPass(e.target.value)}
        placeholder="password"
      />
      <button type="submit" onClick={() => handleCreateUser()}>
        create
      </button>
    </div>
  );
};

export default ApiTest;
