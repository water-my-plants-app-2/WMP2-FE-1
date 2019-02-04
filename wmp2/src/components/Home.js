import React from 'react';

import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';

function Home(props){
    
    const toPlantsList = e => {
        e.preventDefault();
        props.history.push(`/plant-list`);
    };

    const toPlantForm = e => {
        e.preventDefault();
        props.history.push(`/plant-form`);
    };

    return(
        <div className="homeWrapper">
                <h2>Plants Home Page</h2>
            <div>
                Plants List
                <Button>--></Button>
            </div>
            <div>
                Add a New Plant
                <Button>Plant Form</Button>
            </div>
        </div>
    );
}

export default Home;