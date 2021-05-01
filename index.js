import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import SignUpContainer from "./Components/SignUpContainer"
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


ReactDOM.render(
  <>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </>
   ,
  document.getElementById('root')
);

 