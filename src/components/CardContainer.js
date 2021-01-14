import { useState, useEffect } from 'react';
import Card from './Card';
import ModalExampleModal from './modals/modal'
import axios from 'axios';

import Filter1 from './Filter/Filter1';
import Filter2 from './Filter/Filter2';
import Filter3 from './Filter/Filter3';

import './CardContainer.css'

const CardContainer = () => {
    const [potions, setPotions] = useState([]);
    const [tempPotions,setTempPotions] = useState([]);
    // console.log(potions);

    const filterPotion = (category) => {
        setTempPotions(category)
    } 

    useEffect(() => {
        axios.get("http://localhost:5000/potions")
            .then(x => x.data)
            .then(data => {
                setPotions(data)
            })
    }, []);

    const changeCategory = () => {
        axios.get("http://localhost:5000/potions")
            .then(x => x.data)
            .then(data => {
                setPotions(data.filter((x) => {
                    return x.categorie === {tempPotions}
                }))
            })
    }

    // useEffect(()=> {
    //     changeCategory();
    // }, [potions])

    
    return (
        <div className='bloc-img-description'>
            <Filter1 filter={filterPotion}/>
            <Filter2 />
            <Filter3 />
            {potions && potions.map((potion, index) => {
                return(
                    <div>
                        <Card info={potion} key={index} />
                        <ModalExampleModal info={potion} key={index}/>
                    </div>
                )
            })}
        </div>
    )
}
export default CardContainer;
