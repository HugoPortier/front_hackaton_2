import React,{ useState, useEffect } from 'react'
import axios from 'axios'

const Panier = () => {

    const [panier, setPanier] = useState([])
    const [exterminate, setExterminate] = useState([])

    console.log("panier", panier);

    useEffect(() => {
    axios.get(`http://localhost:5000/panier`)
    .then(res => {console.log(res);
        setPanier(res.data)
    })
    
}, [])


const delete_panier = (id) => {
    axios.delete(`http://localhost:5000/panier/${id}`)
    .then(res => {
        setPanier(res.data[0])
    })
}
useEffect(() => {
    axios.get(`http://localhost:5000/panier`)
    .then(res => {console.log(res);
    })
    
}, [exterminate])

    return (
        <div>
            {panier.map((item)=>{
                return(
                    <div>
                        <img src={item.image} key={item.id} alt={item.nom}/>
                        <p>{item.nom}</p>
                        <p>{item.prix}</p>
                        <button 
                        onClick={()=> delete_panier(item.id)}
                        >X</button>
                    </div>
                )

            })}
        </div>
    )
}

export default Panier;

