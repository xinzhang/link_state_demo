import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Apollo Link State Demo</h1>
  </header>);

const App = () => (
  <div className="App">
    <Header/>
  </div>
);

export default App;
