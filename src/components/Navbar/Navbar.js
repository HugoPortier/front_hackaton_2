import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <p>
                <span className="home">E-Potion</span>
                <span>Nos potions</span>

            <Link to='/Panier'>
                <span>Panier</span>
            </Link>

                <span>Connexion</span>
            </p>
    </div>
    )
}

export default Navbar
