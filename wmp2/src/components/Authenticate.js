import React from 'react';

import PlantListView from '../views/PlantListView';

const authenticate = App => Login =>
class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    componentDidMount() {
        if (!localStorage.getItem('user')){
            this.setState({ isLoggedIn: false })
        } else {
            this.setState({ isLoggedIn: true })
        }
    }

    render(){
        if(this.state.isLoggedIn) return <PlantListView />
        return <Login />
    }
}

export default authenticate;