import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Simple from './Simple';

function App() {
  const [myDate, setMydate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMydate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  })
  return (
    <div>
      <h3>Example HTML</h3>
      <input/>
      <div>{myDate.toString()}</div>
      
    </div>
  );
}

export default App;
