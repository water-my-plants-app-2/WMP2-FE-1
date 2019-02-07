import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import authenticate from './components/Authenticate';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {testItem} from './store/actions/UserAction';
import PlantListView from './views/PlantListView';
import AddForm from './components/AddForm'
import axios from 'axios';
import PlantScheduleView from './views/PlantScheduleView';
const baseURL = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants/';

class App extends Component {
  // componentDidMount = () => this.props.testItem();
  state ={
    
    isUpdating:false,
    item: {
      name:'',
                description: '',
                characteristic: '',
                lastWater:'',
                nextWater: '',
                imgUrl: ''
    }
  }

  handleInputChange = e => {
    this.setState({item:{...this.state.item,[e.target.name]: e.target.value}});
}

// deletePlant = plantId => {
//   console.log('delete plant is called')
//   axios
//   .delete(`${DeleteURL}${plantId}`)
//   .then(res => {
//       const newPlants = this.state.plants.filter(plant => plant.id !== plantId)
//       this.setState({plants:newPlants});
//       this.props.history.push('/plant-list');
//       console.log(res.data)
//   })
//   .catch(err => {
//       console.log(err)
//   });
// };


addPlant = e => {
  e.preventDefault();
  console.log('plant adding')
  this.setState({isUpdating:false})
  axios
  .post(`${baseURL}`, {
      name: this.state.item.name,
      description: this.state.item.description,
      characteristic: this.state.item.characteristic,
      lastWater: this.state.item.lastWater,
      nextWater: this.state.item.nextWater,
      img_url: this.state.item.img_url})
  .then(res => {
      this.setState({ plants: res.data });
      this.props.history.push('/plants-list')
      console.log(res.data)
  })
  .catch(err => console.log(err));
}

updatePlant = plantId  => {
  console.log('updating plant!!!-------------',this.state.item)
  this.setState({isUpdating:true})
  axios
  .put(`https://wmp2-back-end.herokuapp.com/api/plantsunp/${this.state.item.id}`, {
      
          name: this.state.item.name,
          description: this.state.item.description,
          characteristic: this.state.item.characteristic,
          lastWater: this.state.item.lastWater,
          nextWater: this.state.item.nextWater,
          img_url: this.state.item.img_url,
          // isUpdating: 
  })
      .then(res => {
          this.setState({
              item: {
                  name:'',
                  description:'',
                  characteristic: '',
                  lastWater:'',
                  nextWater: '',
                  img_url: '',
                  isUpdating:false
              },
              
              
          },() => console.log(this.state.plants));
          this.props.history.push('/plants')
          console.log(res.data);
      })
      .catch(err => {
          console.log('update not working', err);
  })
  console.log(this.state.plants)
}

  populateForm = (item) => {
    // e.preventDefault();
    this.setState({
        item,
        isUpdating:true
    });
    this.props.history.push("/plant-form");
  };

  handleSubmit = () => {
    // e.preventDefault();
    if (this.props.isUpdating) {
      this.updatePlant();
    } else {
      this.addPlant();
    }
  }

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
          handleInputChange={this.handleInputChange}
          addPlant={this.addPlant}
          handleSubmit={this.handleSubmit}
          updatePlant={this.updatePlant}
         /> )}/>
        {/* <Route path="/plant-schedule" render={props => (
          <PlantScheduleView {...props} />
        )} /> */}
      </div>
    );
  }
  }

const Conditional = authenticate(HomeView)(LoginView)

const mapStateToProps = state => ({
  message:state.message
})
const AppWithRouter = withRouter(App)
export default connect(mapStateToProps,{testItem})(AppWithRouter);
// export default App;