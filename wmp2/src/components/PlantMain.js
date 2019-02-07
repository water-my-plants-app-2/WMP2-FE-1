import React from 'react';
import {Link} from 'react-router-dom';


class PlantMain extends React.Component{
    constructor(props){
        super(props);
        this.state={} 
    }

    populateForm1 = (e,id) => {
       e.preventDefault();
       const item = this.props.plants.find(plant => plant.id === id)
       this.props.populateForm(item);
    //    this.setState={
    //         name:'',
    //         description:'',
    //         characteristic: '',
    //         lastWater:'',
    //         nextWater: '',
    //         img_url: '',
    //         isUpdating:false       }
   }
    render(){

        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Description: {this.props.description}</p>
                <p>Characteristics: {this.props.characteristic}</p>
                <p>Last Watered: {this.props.lastWater}</p>
                <p>Next Watering: {this.props.nextWater}</p>
                <img src={this.props.img_url} alt="plant" />
                <button onClick={e => {
                    e.preventDefault();
                    console.log('button clicked!!!!!')
                    this.props.deletePlant(this.props.plant.id)
                }}>Delete Plant</button>
                <Link to="plant-form"><button onClick={e => this.populateForm1(e, this.props.plant.id)}>Update Form</button></Link>

            </div>
        )
    }
}

export default PlantMain;