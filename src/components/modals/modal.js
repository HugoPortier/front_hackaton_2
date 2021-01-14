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
      trigger={<Button>Show Modal</Button>}
      >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image >
        <img className="image-modal" src={props.info.image} alt={props.info.nom}></img>
        <Modal.Description>
          <Header>{props.info.nom}</Header>
          <p>Effet : {props.info.effet}</p>
          <p>duration : {props.info.duration}</p>
          <p>age l'égal requis : {props.info.age_min}</p>
          <p>age maximum légal : {props.info.age_max}</p>
          <p>Catégorie : {props.info.categorie}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
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
