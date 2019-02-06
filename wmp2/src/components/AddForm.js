import React from 'react';
import axios from 'axios';

const baseURL = 'https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants'
// const baseUrl = "http://cors.io/?BACKENDURL"

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            plant: this.props.item || {
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

   
   

    handleInputChange = e => {
        this.setState({plant:{...this.state.plant,[e.target.name]: e.target.value}});
    }

    // addPlant = e => {
    //     e.preventDefault();
    //     console.log('plant adding')
    //     this.setState({isUpdating:false})
    //     axios
    //     .post(`${baseURL}`, {
    //         name: this.state.name,
    //         description: this.state.description,
    //         characteristic: this.state.characteristic,
    //         lastWater: this.state.lastWater,
    //         nextWater: this.state.nextWater,
    //         img_url: this.state.img_url})
    //     .then(res => {
    //         this.setState({ plants: res.data });
    //         this.props.history.push('/plants-list')
    //         console.log(res.data)
    //     })
    //     .catch(err => console.log(err));
    // }

    updatePlant = plantId  => {
        console.log('updating plant!!!-------------')
        this.setState({isUpdating:true})
        axios
        .put(`https://wmp2-back-end.herokuapp.com/api/plantsunp/${this.state.plant.id}`, {
            
                name: this.state.plant.name,
                description: this.state.plant.description,
                characteristic: this.state.plant.characteristic,
                lastWater: this.state.plant.lastWater,
                nextWater: this.state.plant.nextWater,
                img_url: this.state.plant.img_url,
                // isUpdating: 
        })
            .then(res => {
                this.setState({
                    plant:{...this.state.plant,
                    name:'',
                    description:'',
                    characteristic: '',
                    lastWater:'',
                    nextWater: '',
                    img_url: '',
                }, isUpdating: false});
                this.props.history.push('/plants')
                console.log(res.data);
            })
            .catch(err => {
                console.log('update not working', err);
        })
    }

    

    handleSubmit = () => {
        // e.preventDefault();
        if (this.props.isUpdating) {
          this.updatePlant();
        } else {
          this.addPlant();
        }
      }

    render(){
        return (
            <div>
                <form autoComplete="off" onSubmit={this.addPlant}>
                    <input onChange={this.handleInputChange} placeholder="Name" value={this.state.plant.name} name="name" />
                    <input onChange={this.handleInputChange} placeholder="Description" value={this.state.plant.description} name="description" />
                    <input onChange={this.handleInputChange} placeholder="Characteristics" value={this.state.plant.characteristic} name="characteristic" />
                    <input onChange={this.handleInputChange} placeholder="Last Watered" value={this.state.plant.lastWater} name="lastWater" />
                    <input onChange={this.handleInputChange} placeholder="Next Water" value={this.state.plant.nextWater} name="nextWater" />
                    <input onChange={this.handleInputChange} placeholder="Image URL" value={this.state.plant.img_url} name="img_url" type="text" />
                </form>
                <button onClick={this.addPlant}>
                    Add Plant
                </button>  
                <button onClick={this.updatePlant}>{this.props.isUpdating ? 'Update item' : 'Add new Item'}</button>
            </div>
        )
    }
}

export default AddForm;