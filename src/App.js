import React from 'react';
import './App.scss';
import NavbarComponent from './components/navbar/navbar';
import Home from './components/homepage/home';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <header className="App-header">
          <Home />
      </header>
    </div>
  );
}

export default App;
