import React from 'react';
import {Link} from 'react-router-dom';
import "./PlantMain.css";
const confirmDelete = () => {
    let r = window.confirm('WHY WOULD YOU DELETE ME?! FINE GO AHEAD.')
}

class PlantMain extends React.Component{
    constructor(props){
        super(props);
        this.state={} 
    }

    

    populateForm1 = (e,id) => {
       e.preventDefault();
       const item = this.props.plants.find(plant => plant.id === id)
       this.props.populateForm(item);
   
   }
    render(){

        return(
            <section class="details-card">
                <div className="contianer">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-content">
                                <div className="card-img">
                                    <img src={this.props.img_url} alt="plant" width="800px" height="500px" />
                                    <span><h4>{this.props.name}</h4></span>
                                </div>
                                <div className="card-desc">
                                    <h3>Plant Info:</h3>
                                    <p>Description: {this.props.description}</p>
                                    <p>Characteristics: {this.props.characteristic}</p>
                                    <p>Last Watered: {this.props.lastWater}</p>
                                    <p>Next Watering: {this.props.nextWater}</p>
                                    <a href className="btn-card" 
                                        onClick={e => {
                                        e.preventDefault();
                                        confirmDelete();
                                        this.props.deletePlant(this.props.plant.id)
                                        }}>
                                    Delete Plant
                                    </a>
                                    <a href className="btn-card" onClick={e => this.populateForm1(e, this.props.plant.id)}>
                                    <Link to="plant-form">
                                        
                                            Update Form
                                        
                                    </Link></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

               
                
                
                <div>
                    
                    
                </div>
                

            </section>
        )
    }
}

export default PlantMain;