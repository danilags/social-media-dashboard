import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

const ModalImage = (props) => (
  <Modal isOpen={props.isOpen} toggle={props.onToggle}>
      <ModalHeader toggle={props.toggle}>{props.item.title}</ModalHeader>
      <ModalBody>
        <img src={props.item.url} style={{ width: '100%' }} alt={props.item.title} />
      </ModalBody>
  </Modal>
)

export default ModalImage;
