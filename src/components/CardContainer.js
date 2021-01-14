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
    const [displayPotion, setDisplayPotion] = useState([]);
    const [categorie,setCategorie] = useState();
    const [age,setAge] = useState();
    const [prix, setPrix] = useState();

    const filterPotion = (category) => {
        setCategorie(category)
    } 
    
    const filterPotionTwo = (age) => {
        setAge(age)
    } 

    const filterPotionThree = (prix) => {
        setPrix(prix)
    } 
    
    useEffect(() => {
        axios.get("http://localhost:5000/potions")
            .then(x => x.data)
            .then(data => {
                setPotions(data)
                setDisplayPotion(data)
            })
    }, []);

    useEffect(() => {
        if(categorie) {
            setDisplayPotion(
                potions.filter((x) => {
                    return x.categorie === categorie
                })
            )
        }
    }, [categorie, potions])

    useEffect(() => {
        if(age) {
            setDisplayPotion(
                potions.filter((x) => {
                    return x.age_min >= age
                })
            )
        }
    }, [age, potions])

    useEffect(() => {
        if(prix) {
            setDisplayPotion(
                potions.filter((x) => {
                    return x.prix >= prix
                })
            )
        }
    }, [prix, potions])
    
    return (
        <div className='bloc-img-description'>
            <Filter1 filter={filterPotion}/>
            <Filter2 filter={filterPotionTwo}/>
            <Filter3 filter={filterPotionThree}/>
            {displayPotion.map((potion, index) => {
                return(
                    <div>
                        <Card info={potion} key={index} />
                        <ModalExampleModal info={potion} key={potion.id}/>
                    </div>
                )
            })}
        </div>
    )
}
export default CardContainer;
