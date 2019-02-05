import React from 'react';
import axios from 'axios';

const baseURL = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants'
// const baseUrl = "http://cors.io/?BACKENDURL"

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            plant: {
                name:'',
                description: '',
                characteristic: '',
                lastWater:'',
                nextWater: '',
                imgUrl: ''
            },
            isUpdating: false
            
        }
    }

   
    // updatePlant = plantId  => {
    //     axios.put(`https://wmp2-back-end.herokuapp.com/api/plantsunp/${plantId}`, this.state.plant)
    //     .then(res => {
    //         this.setState({
    //             // plants: res.data,
    //             isUpdating: false,
    //             plant: {
    //                 name:'',
    //                 description: '',
    //                 characteristic: '',
    //                 lastWater:'',
    //                 nextWater: '',
    //                 imgUrl: ''
    //             }
    //         });
    //         this.props.history.push('/plants')
    //     })
    //     .catch(err => {
    //         console.log('update not working', err);
    //     })
    // }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    addPlant = e => {
        e.preventDefault();
        console.log('plant adding')
        axios
        .post(`${baseURL}`, {
            name: this.state.name,
            description: this.state.description,
            characteristic: this.state.characteristic,
            lastWater: this.state.lastWater,
            nextWater: this.state.nextWater,
            img_url: this.state.img_url})
        .then(res => {
            this.setState({ plants: res.data });
            this.props.history.push('/plants-list')
            console.log(res.data)
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <form autoComplete="off" onSubmit={this.addPlant}>
                    <input onChange={this.handleInputChange} placeholder="Name" value={this.state.name} name="name" />
                    <input onChange={this.handleInputChange} placeholder="Description" value={this.state.description} name="description" />
                    <input onChange={this.handleInputChange} placeholder="Characteristics" value={this.state.characteristic} name="characteristic" />
                    <input onChange={this.handleInputChange} placeholder="Last Watered" value={this.state.lastWater} name="lastWater" />
                    <input onChange={this.handleInputChange} placeholder="Next Water" value={this.state.nextWater} name="nextWater" />
                    <input onChange={this.handleInputChange} placeholder="Image URL" value={this.state.img_url} name="img_url" type="text" />
                </form>
                <button onClick={this.addPlant}>
                    Add Plant
                </button>  
            </div>
        )
    }
}

export default AddForm;