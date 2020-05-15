import React from 'react';
import './App.scss';
import NavbarComponent from './components/navbar/navbar';
import Home from './components/homepage/home';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Articles from './components/articles/articles';
import ArticlesMain from './components/articles/articlesMain';
import Quote1 from './components/quotes/quote1';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <NavbarComponent />
      <header className="App-header">
        <Switch>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
            <Articles />
            <Quote1 />
            <ArticlesMain />
          </Route>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
