import React from 'react';
import PlantMain from './PlantMain';

// need to wait until Backend api info for axios calls
const PlantList = props => {
    return(
        <div>
            {props.plants.map(plant =>
               <PlantMain 
               key={plant.id}
               name={plant.name}
               plant={plant}
               description={plant.description}
               nextWater={plant.nextWater}
               lastWater={plant.lastWater}
               characteristic={plant.characteristic}
               imgUrl={plant.imgUrl}
                />)}
        </div>
    )
}

export default PlantList;