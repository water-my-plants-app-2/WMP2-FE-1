import React from 'react';
import PlantList from '../components/PlantList';
import axios from 'axios';
class PlantListView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            plants:[]
        }
    }
    componentDidMount(){
        axios
        .get('https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants')
        .then(res =>{
            this.setState({plants:res.data})
        })
        .catch(err => err)
    }
    render(){
        return(
            <PlantList 
                plants={this.state.plants}
            />
        )
    }
}

export default PlantListView;