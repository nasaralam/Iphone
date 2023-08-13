import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './navbaar';
import reportWebVitals from './reportWebVitals';
import Airtel from './component/second';
import Third from './component/third';
import Fourth from './component/fourth';
import { Fifth } from './component/fifth';
import Sixth from './component/sixth';
import Seventh from './component/seventh';
import Eight from './component/eight';
import Ninth from './component/ninth';
import Tenth from './component/tenth';
import Eleventh from './component/eleventh';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Airtel />
    <Third />
    <Fourth />
    <Fifth  />
    <Sixth />
    <Seventh />
    < Eight />
    <Ninth />
    <Tenth />
    <Eleventh />
    
  </React.StrictMode>
);
reportWebVitals();
