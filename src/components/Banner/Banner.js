import React from 'react'

import './Banner.css';

import imgbanner from '../img/potionbanner.jpg';

function Banner() {
    return (
        <div id="banner">
            <img src={imgbanner} alt="banner" />
            <h1>Ce super titre qui tue la mort</h1>
        </div>
    )
}

export default Banner
