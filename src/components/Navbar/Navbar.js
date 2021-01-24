import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <ul className="navbar">
            <Link to='/'>
                <li className="home">E-Potion</li>
            </Link>
            <Link to='/Panier'>
                <li>Panier</li>
            </Link>
            </ul>
    </div>
    )
}

export default Navbar
