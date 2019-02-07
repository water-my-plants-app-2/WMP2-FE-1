import React from 'react';
import PlantList from '../components/PlantList';
import axios from 'axios';
import ReactNotification from "react-notifications-component";

const baseURL = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants';
const DeleteURL = 'https://wmp2-back-end.herokuapp.com/api/plantsunp/';

class PlantListView extends React.Component{
    constructor(props){
        super(props);
        this.addNotification = this.addNotification.bind(this);
        this.notificationDOMref = React.createRef();
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

    addNotification() {
        this.notificationDOMref.current.addNotification({
            title: "Water Your Plants!",
            message: "Ivy needs to be watered",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 2000 },
            dismissable: { click: true }
        });
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
            <div><
                div className="Notifications">
                    <ReactNotification ref={this.notificationDOMref} />
                    <button onClick={this.addNotification} classname="btn btn-primary">Add a Notification!</button>
                </div>
                <PlantList 
                    plants={this.state.plants}
                    deletePlant={this.deletePlant}
                    updatePlant={this.props.updatePlant}
                    populateForm={this.props.populateForm}
                    history={this.props.history}
                />
                

            </div>
            

        )
    }
}

export default PlantListView;