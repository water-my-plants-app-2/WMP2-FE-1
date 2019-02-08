import React from 'react';
import axios from 'axios';
import {withRouter} from 'react'
// const baseUrl = "http://cors.io/?BACKENDURL"
import './AddForm.css';
import './FormButton.css';



const AddForm = (props) => {
    
   

        return (
            <div className="container">
                <div classname="row">
                {/* <h2>Add or Update</h2> */}
                        <form  role="form" className="col-md-9 go-right" autoComplete="off" onSubmit={props.addPlant}>
                        
                            <div className="form-group">
                                <input  id="name" className="form-control" onChange={props.handleInputChange} placeholder="Name" value={props.item.name} name="name" />
                                <label for="name">Name</label>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="description" onChange={props.handleInputChange} placeholder="Description" value={props.item.description} name="description" />  
                                <label for="description">Description</label>
                            </div>
                            <div className="form-group">
                            <input className="form-control" id="characteristic" onChange={props.handleInputChange} placeholder="Characteristics" value={props.item.characteristic} name="characteristic" />
                            <label for="characteristic">Characteristics</label>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="lastWater" onChange={props.handleInputChange} placeholder="Last Watered" value={props.item.lastWater} name="lastWater" />
                                <label for="lastWater">Last Watered</label>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="nextWater" onChange={props.handleInputChange} placeholder="Next Watering" value={props.item.nextWater} name="nextWater" />
                                <label for="nextWater">Next Watering</label>
                            </div>
                            <div className="form-group">
                                <input className="img_url" id="img_url" onChange={props.handleInputChange} placeholder="Image URL" value={props.item.img_url} name="img_url"  />
                                <label for="img_url">Image URL</label>
                            </div>
                        </form>
                        <div className="buttonsdiv">
                            <button class="back" onClick={props.addPlant}>
                                AddPlant
                            </button>
                            <button className="button" onClick={props.updatePlant}>
                                {props.isUpdating ? 'Update item' : 'Add new Item'}
                            </button>
                        </div>
                       
                     
                    {/* <button ></button> */}
                </div>
                
            </div>
        )
    }


export default AddForm;