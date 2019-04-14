import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
