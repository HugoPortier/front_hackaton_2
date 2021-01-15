import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <p>
            <Link to='/'>
                <span className="home">E-Potion</span>
            </Link>
            <Link to='/Panier'>
                <span>Panier</span>
            </Link>
            </p>
    </div>
    )
}

export default Navbar
