import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import UserList from './pages/UserList';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <BrowserRouter>
          <Route path="/" exact component={Landing} />
          <Route path="/users" component={UserList} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
