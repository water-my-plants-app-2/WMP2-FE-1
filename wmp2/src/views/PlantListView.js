import React from 'react';
import PlantList from '../components/PlantList';
import axios from 'axios';

const baseURL = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants';
const DeleteURL = 'https://wmp2-back-end.herokuapp.com/api/plantsunp/'
class PlantListView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            plants:[]
        }
    }
    componentDidMount(){
        axios
        .get(`${baseURL}`)
        .then(res =>{
            this.setState({plants:res.data})
        })
        .catch(err => err)
    }

    deletePlant = plantId => {
        console.log('delete plant is called')
        axios
        .delete(`${DeleteURL}${plantId}`)
        .then(res => {
            const newPlants = this.state.plants.filter(plant => plant.id !== plantId)
            this.setState({plants:newPlants});
            this.props.history.push('/plant-list');
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    };
    render(){
        return(
            <PlantList 
                plants={this.state.plants}
                deletePlant={this.deletePlant}
            />
        )
    }
}

export default PlantListView;