import React from 'react'
import ModalExampleModal from '../modals/modal'


import './Card.css'


function Card(props) {
    
    return (

            <div className="card card-potion" style={{width: '18rem'}}>
            <img className="card-img-top img-potion" src={props.info.image} alt=""></img>
            <div className="card-body body-potion">
                <h5 className="card-title title-potion">{props.info.nom}</h5>
            </div>
            


        </div>

    )
}

export default Card;
