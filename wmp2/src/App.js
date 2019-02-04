import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import authenticate from './components/Authenticate';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';

import {connect} from 'react-redux';
import {testItem} from './store/actions/UserAction'

class App extends Component {
  componentDidMount = () => this.props.testItem();

  render() {
    const{message} = this.props;
    return (
      <div className="App">
        <p>{message}</p>
        <Conditional />
      </div>
    );
  }
}

const Conditional = authenticate(HomeView)(LoginView)

const mapStateToProps = state => ({
  message:state.message
})

export default connect(mapStateToProps,{testItem})(App);
// export default App;