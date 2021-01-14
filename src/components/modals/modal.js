import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

import './modal.css' ;
const ModalExampleModal = (props, info) => {
  const [open, setOpen] = React.useState(false)
  return (
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>voir plus</Button>}
      >
      <Modal.Header>POTION</Modal.Header>
      <Modal.Content image >
        <img className="image-modal" src={props.info.image} alt={props.info.nom}></img>
        <Modal.Description>
          <Header>{props.info.nom}</Header>
          <p>Effet : {props.info.effet}</p>
          <p>duration : {props.info.duration}</p>
          <p>age min : {props.info.age_min}</p>
          <p>age max : {props.info.age_max}</p>
          <p>Catégorie : {props.info.categorie}</p>
          <p>Prix : {props.info.prix}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          return
        </Button>
        <Button
          content="buy"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
