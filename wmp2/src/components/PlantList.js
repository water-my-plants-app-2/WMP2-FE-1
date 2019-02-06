import React from 'react';
import PlantMain from './PlantMain';

// need to wait until Backend api info for axios calls
const PlantList = props => {
    // console.log(props.plants)
    return(
        <div>
            {props.plants.map(plant =>
               <PlantMain 
               key={plant.id}
               name={plant.name}
               plants={props.plants}
               history={props.history}
               plant={plant}
               description={plant.description}
               nextWater={plant.nextWater}
               lastWater={plant.lastWater}
               characteristic={plant.characteristic}
               img_url={plant.img_url}
               deletePlant={props.deletePlant}
               updatePlant={props.updatePlant}
               populateForm={props.populateForm}
               id={plant.id}
                />)}
        </div>
    )
}

export default PlantList;