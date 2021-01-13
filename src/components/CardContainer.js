import { useState } from 'react';
import Card from './Card';
import axios from 'axios';


function CardContainer() {
    const [potions, setPotions]= useState([]);

    const getPotions = () => {
        axios.get('http://localhost:5000/potions')
        .then(response => response.data)
        .then(data => {
            setPotions(data.results[0])
        })
    }
    return (
        <div className="card-container">
            {potions.map((potion, index) => {
                return(
                    <Card key={index} info={potion}/>
                )
            })}
        </div>
    )
}

export default CardContainer;
