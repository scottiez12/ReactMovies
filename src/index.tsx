import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Simple from "./Simple";
import Conditionals from './ConditionalsAndTernaries';
import Events from './Events';
import MapExample from './MapExample';
import ConditionalsIfSeveralComponents from './ConditionalsIfSeveralComponents';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Simple/>
    <Conditionals/>
    <Events/>
    <MapExample/>
    <ConditionalsIfSeveralComponents/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
