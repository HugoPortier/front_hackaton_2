import { useState, useEffect } from 'react';
import Card from './Card';
import ModalExampleModal from './modals/modal'
import axios from 'axios';

import './CardContainer.css'

const CardContainer = () => {
    const [potions, setPotions] = useState([]);
    console.log("potions", potions)

    useEffect(() => {
    axios.get("http://localhost:5000/potions")
    .then((x) => {
        console.log(x);
        setPotions(x.data)});
    }, []);
    return (
        <div>
            <h1 className="catalog-title">Nos potions</h1>
            <div className="block-filter-description">
                <div className="block-filter"></div>
                <div className='bloc-img-description'>
                    {potions && potions.map((potion, index) => {
                        return(
                            <div>
                                <Card info={potion} key={index} />
                                <ModalExampleModal info={potion} key={index}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default CardContainer;

