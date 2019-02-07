import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.css';
// const NavContainer = styled.div`
// background:green;
// `




function NavBar(props){
    return(
        <nav className="main-navigation">
            <div className="navbar-header animated fadeInUp">
                <a className="navbar-brand" href>Water My Plants</a>
            </div>

            <ul className="nav-list">
                <li className ="nav-list-item">
                    <a href className='nav-link' ><NavLink to="/plant-list">Check out the Plant List</NavLink></a>
                </li>
                <li className ="nav-list-item">
                    <a href className="nav-link"><NavLink to="/plant-form">Add a Plant Here! Form</NavLink></a>
                </li>
                <li className ="nav-list-item">
                    <a href className ="nav-link"><NavLink to="/">Home</NavLink></a>
                </li>
            </ul>
            
            
            
        </nav>
        
        
    );
}

export default NavBar;