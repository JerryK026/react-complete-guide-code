import React, { useState } from 'react';
import './App.css';

import UpperBox from './components/UI/UpperBox';
import UnderBox from './components/UI/UnderBox';

function App() {
  const [userData, setUserData] = useState([]);

  const saveUserData = (enteredUserData) => {
    console.log(userData);
    setUserData((prevUserData) => {
      return [enteredUserData, ...prevUserData];
    });
  };

  return (
    <div>
      <UpperBox onSaveUser={saveUserData}></UpperBox>
      <UnderBox userData={userData}></UnderBox>
    </div>
  );
}

export default App;
