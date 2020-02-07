import logo from './logo.svg';
import './App.css';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  render() {
    this.onCLickHandlerr = e => {
      var header = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      };

      let sth = axios
        .get('http://localhost:8090/', {
          headers: header
        })
        .then(Response => {
          console.log(Response.data);
        });
      
    };

    return <div>{this.onCLickHandlerr()}</div>;
  }
}

export default App;
