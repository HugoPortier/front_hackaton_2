import React from 'react'
import ModalExampleModal from '../modals/modal'


import './Card.css'


function Card(props) {
    
    return (
        <div className="individual-card" >
            <img src={props.info.image} alt={props.info.nom}></img>
            <p id="name">{props.info.nom}</p>
        </div>

    )
}

export default Card;
