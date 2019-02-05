import React from 'react';
import AddForm from '../components/AddForm';
import axios from 'axios';

class AddFormView extends React.Component {
    constructor(props){
        super(props);
        this.setState={}
    }

   

    render(){
        return(
            <div>
                <AddForm addPlant={this.addPlant}/>
                 
            </div>
            
        )
    }
}

export default AddFormView.js;