import React from 'react';
import axios from 'axios';
import {withRouter} from 'react'
// const baseUrl = "http://cors.io/?BACKENDURL"

const AddForm = (props) => {
    
        return (
            <div>
                <form autoComplete="off" onSubmit={props.addPlant}>
                    <input onChange={props.handleInputChange} placeholder="Name" value={props.item.name} name="name" />
                    <input onChange={props.handleInputChange} placeholder="Description" value={props.item.description} name="description" />
                    <input onChange={props.handleInputChange} placeholder="Characteristics" value={props.item.characteristic} name="characteristic" />
                    <input onChange={props.handleInputChange} placeholder="Last Watered" value={props.item.lastWater} name="lastWater" />
                    <input onChange={props.handleInputChange} placeholder="Next Water" value={props.item.nextWater} name="nextWater" />
                    <input onChange={props.handleInputChange} placeholder="Image URL" value={props.item.img_url} name="img_url" type="text" />
                </form>
                <button onClick={props.addPlant}>
                    Add Plant
                </button>  
                <button onClick={props.updatePlant}>{props.isUpdating ? 'Update item' : 'Add new Item'}</button>
            </div>
        )
    }


export default AddForm;