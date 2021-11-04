import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import Games from '../games/Games';

const Navbar = ({handleChange}) => {
    return (
        <>
        <div class="nav">
            <input type="checkbox" id="nav-check"/>
            <div class="nav-header">
                <div class="nav-title">
                E-SPORT
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>

            
        
            <div class="nav-links">
                <Games handleChange={handleChange}/>
                <Link to='/Leagues'>
                <div class="links">Leagues</div>
                </Link>
                <Link to="/teams">
                <div class="links">Teams</div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Navbar;
