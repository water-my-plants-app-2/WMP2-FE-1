import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import authenticate from './components/Authenticate';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import {connect} from 'react-redux';
import {checkCheck} from './store/reducers/UserReducer'


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

// const mapStateToProps = state => ({
//   message:state.message
// })

// export default connect(mapStateToProps,{checkCheck})(App);
export default App;