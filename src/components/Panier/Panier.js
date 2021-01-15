import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import './Panier.css';

const Panier = () => {

    const [panier, setPanier] = useState([])

    console.log("panier", panier);

    useEffect(() => {
    axios.get(`http://localhost:5000/panier`)
    .then(res => {console.log(res);
        setPanier(res.data)
    })
    
}, [panier])


const delete_panier = (id) => {
    axios.delete(`http://localhost:5000/panier/${id}`)
    .then(res => {
        setPanier(panier.filter((item)=> item.id !== id ))
    })
}


return (
    <div>
        {panier.map((item)=>{
  return (
    <div id="paniertest">
    <img id="imgpanier"
        src={item.image} alt={item.nom} />
          <p id="namepanier">{item.nom}</p>
          <p id="prixpanier">{item.prix} €</p>
              <button id="buttonpanier"
              onClick={()=> delete_panier(item.id)}
              >X</button>
        </div>
      )
    })}
  </div>
)}
export default Panier;
