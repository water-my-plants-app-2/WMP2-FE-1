import React from 'react';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddForm from './AddForm'

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
        <div className="HomeContainer">
                <h2>Plants Home Page</h2>
            <div>
                Plants List
                <Button>--></Button>
            </div>
            <div>
                Add a New Plant
                <Link exact to={AddForm}>Plant Form</Link>
            </div>
        </div>
    );
}

export default Home;