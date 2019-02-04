import React from 'react';
import axios from 'axios';

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            plant: {
                name:'',
                description: '',
                characteristic: '',
                lastWater:'',
                nextWter: '',
                imgUrl: ''
            },
            isUpdating: false
            
        }
    }

    addNewPlant = event =>{
        event.preventDefault();
        axios.post('https://wmp2-back-end.herokuapp.com/api/usersunp/7/plants')
        .then(res => {
            this.setState({ state:res.data })
            this.props.history.push('/plants')
        })
        .catch(err => err)
    }

    updatePlant = ()  => {
        axios.put('https://wmp2-back-end.herokuapp.com/api/plantsunp', this.state.plant)
        .then(res => {
            this.setState({
                plants: res.data,
                isUpdating: false,
                plant: {
                    name:'',
                    description: '',
                    characteristic: '',
                    lastWater:'',
                    nextWater: '',
                    imgUrl: ''
                }
            });
            this.props.history.push('/plants')
        })
        .catch(err => {
            console.log('update not working', err);
        })
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
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
                    <input onChange={this.handleInputChange} placeholder="Image URL" value={this.state.imageUrl} name="imageUrl" />
                </form>
            </div>
        )
    }
}

export default AddForm;