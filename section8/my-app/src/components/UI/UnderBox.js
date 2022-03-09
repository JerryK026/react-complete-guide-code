import React from 'react';

const UnderBox = (props) => {
  return (
    <div>
      {props.userData.map((user) => (
        <input value={`${user.name} ( ${user.age} years old)`}></input>
      ))}
    </div>
  );
};

export default UnderBox;
