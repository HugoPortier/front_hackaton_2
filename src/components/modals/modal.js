import axios from 'axios';
import React,{ useState } from 'react'

import { Button, Header, Modal } from 'semantic-ui-react'

import './modal.css' ;

const ModalExampleModal = ({ info }) => {
  
  const [open, setOpen] = useState(false)

  const push = async () => { 
    console.log("info", info);
      setOpen(false)
      await axios.post(`http://localhost:5000/panier`, info
)
    .then(res => console.log("res", res))
    }
        return (
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>voir plus</Button>}
      >
      <Modal.Header>POTION</Modal.Header>
      <Modal.Content image >
        <img className="image-modal" src={info.image} alt={info.nom}></img>
        <Modal.Description>
          <Header>{info.nom}</Header>
          <p>Effet : {info.effet}</p>
          <p>duration : {info.duration}</p>
          <p>age l'égal requis : {info.age_min}</p>
          <p>age maximum légal : {info.age_max}</p>
          <p>Catégorie : {info.categorie}</p>
          <p>Prix : {info.prix}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          return
        </Button>

        <Button
          content="ajouter au panier"
          labelPosition='right'
          icon='checkmark'
          onClick={() => push()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
