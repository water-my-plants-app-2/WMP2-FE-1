import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props){
    return(
        <div>
            <NavLink to="/plant-list">Check out the Plant List</NavLink>
            <NavLink to="/plant-form">Add a Plant Here! Form</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    );
}

export default NavBar;