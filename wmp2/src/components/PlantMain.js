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
                <p>Characteristics: {}this.props.characteristics</p>
                <p>Last Watered: {this.props.lastWater}</p>
                <p>Next Watering: {this.props.nextWater}</p>
                
                <button onClick={e => {
                    e.preventDefault();
                    console.log('button clicked!!!!!')
                    this.props.deletePlant(this.props.id)
                }}>Delete Plant</button>
                <button>Update Plant Info</button>

            </div>
        )
    }
}

export default PlantMain;