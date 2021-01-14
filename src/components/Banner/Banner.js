import React from 'react'

import './Banner.css';

import imgbanner from '../img/potionbanner.jpg';

function Banner() {
    return (
        <div id="banner">
            <img src={imgbanner} alt="banner" />
        </div>
    )
}

export default Banner
