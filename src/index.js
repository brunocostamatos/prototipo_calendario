import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppDiario from './AppDiario';
import reportWebVitals from './reportWebVitals';

if (window.location.pathname === '/') {
  ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
} else if (window.location.pathname === '/cal_diario') {
  ReactDOM.render(
    <React.StrictMode>
    <AppDiario />
  </React.StrictMode>,
  document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



