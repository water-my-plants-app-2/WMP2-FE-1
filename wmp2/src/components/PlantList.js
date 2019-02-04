import React from 'react';
import Plant from './Plant';

// need to wait until Backend api info for axios calls
const PlantList = props => {
    return(
        <div>
            {props.plants.map(plant =>
               <Plant 
               key={plant.id}
               description={plant.description}
                />)}
        </div>
    )
}

export default PlantList;