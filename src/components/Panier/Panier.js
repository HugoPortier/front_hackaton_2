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
  <tr>
      <th></th>
      <th>Name</th>
      <th>Prix</th>
      <th>Supprimer</th>
    </tr>
  <div id="paniertest">
      {panier.map((item)=>{

  return (
  <div>
    <tr>
      <img alt={item.name} src={item.image} id="Julien"/>
      <td>{item.nom}</td>
      <td>{item.prix}</td>
      <td><button
            onClick={()=> delete_panier(item.id)}
            >X</button></td>
    </tr>
  </div>
  )})}      
  </div>
  </div>
)}

export default Panier;