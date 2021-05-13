import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Final from "./layout/final";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router><Final/></Router>,
  document.getElementById('root')
);

