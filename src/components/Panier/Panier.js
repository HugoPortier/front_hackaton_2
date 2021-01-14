import React,{ useState, useEffect } from 'react'
import axios from 'axios'

const Panier = () => {
    const [panier, setPanier] = useState([])
console.log("panier", panier);
useEffect(() => {
    axios.get(`http://localhost:5000/panier`)
    .then(res => {console.log(res);
        setPanier(res.data)
    })
    
}, [])

    return (
        <div>
            {panier.map((item)=>{
                return(
                    <div>
                        <img src={item.image} key={item.id} alt={item.nom}/>
                        <p>{item.nom}</p>
                        <p>{item.effet}</p>
                    </div>
                )

            })}
        </div>
    )
}

export default Panier
