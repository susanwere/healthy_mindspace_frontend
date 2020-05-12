import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavbarComponent from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Healthy Mindspace.
        </p>
      </header>
    </div>
  );
}

export default App;
