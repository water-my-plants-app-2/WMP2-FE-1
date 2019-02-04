import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import authenticate from './components/Authenticate';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Conditional />
      </div>
    );
  }
}

const Conditional = authenticate(HomeView)(LoginView)

export default App;
