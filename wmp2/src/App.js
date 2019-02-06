import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import authenticate from './components/Authenticate';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {testItem} from './store/actions/UserAction';
import PlantListView from './views/PlantListView';
import AddForm from './components/AddForm'

class App extends Component {
  // componentDidMount = () => this.props.testItem();
  state ={
    item:null,
    isUpdating:false
  }

  populateForm = (item) => {
    // e.preventDefault();
    this.setState({
        item,
        isUpdating:true
    });
    this.props.history.push("/plant-form");
  };

  render() {
    const{message} = this.props;
    return (
      <div className="App">
        <p>{message}</p>
        <Conditional />
        <Route path="/plant-list" render={props => (
          <PlantListView 
          {...props}
          populateForm={this.populateForm}
          
          />
        )} />
         <Route exact path="/plant-form" render={props => (
          <AddForm {...props} 
          isUpdating={this.state.isUpdating}
          item={this.state.item}
          />
        )}/>
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