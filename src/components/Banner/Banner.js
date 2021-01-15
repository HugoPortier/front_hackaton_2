import React from 'react'

import './Banner.css';

import imgbanner from '../img/potionbanner2.jpeg';

function Banner() {
    return (
        <div id="banner">
            <img src={imgbanner} alt="banner" />
            <h1 className="banner-title">L'atelier des potions</h1>
        </div>
    )
}

export default Banner
