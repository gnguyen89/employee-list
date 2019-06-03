import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="users">View Users</Link>
      </header>
    </div>
  );
}

export default App;
