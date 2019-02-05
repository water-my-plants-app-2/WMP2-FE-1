import React from 'react';

class PlantMain extends React.Component{
    constructor(props){
        super(props);
        this.state={} 
    }

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>Description: {this.props.description}</p>
                <p>Last Watered: {this.props.lastWater}</p>
                <button>Delete Plant</button>
                <button>Update Plant Info</button>

            </div>
        )
    }
}

export default PlantMain;