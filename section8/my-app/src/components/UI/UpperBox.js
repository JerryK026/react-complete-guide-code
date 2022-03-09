import React, { useState } from 'react';

const UpperBox = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const yearChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const buttonHandler = (event) => {
    event.preventDefault();

    const saveUser = {
      key: Math.random(),
      name: userName,
      age: userAge,
    };

    props.onSaveUser(saveUser);
    setUserName('');
    setUserAge('');
  };

  return (
    <div>
      <p>Username</p>
      <input value={userName} onChange={nameChangeHandler}></input>
      <p>Age Years</p>
      <input value={userAge} onChange={yearChangeHandler}></input>
      <button onClick={buttonHandler}>Add User</button>
    </div>
  );
};

export default UpperBox;
