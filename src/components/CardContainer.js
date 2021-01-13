import { useState } from 'react';
import Card from './Card';

function CardContainer() {
    const [potions, SetPotions]= useState([])

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
