import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
 
axios.interceptors.request.use(request=>{
  console.log(request);
  return request;
},error=>{     //error handle while sending request get
  console.error(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response=>{
  console.log(response);
  return response;///error handling while getting response
},error=>{
  console.error(error);
  return Promise.reject(error);
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
