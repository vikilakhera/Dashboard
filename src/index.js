import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Final from "./layout/final";
import {BrowserRouter as Router} from 'react-router-dom';
import Profile from "./layout/profile";

ReactDOM.render(
  <Router><Final/></Router>,
  document.getElementById('root')
);

