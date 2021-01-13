import React from 'react'

function Card(props) {
    
    return (
        <div className="individual-card">
            <img src={props.info.image} alt={props.info.nom}></img>
            <p>{props.info.nom}</p>
        </div>
    )
}

export default Card;
