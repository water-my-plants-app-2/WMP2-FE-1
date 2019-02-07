import React from 'react';
import Home from '../components/Home';
import NavBar from '../components/NavBar';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        return(
            <div>
                <NavBar />
                {/* <Home />    */}
            </div>
           
        )
    } 
    
}
export default HomeView;