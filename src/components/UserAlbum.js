import React from 'react';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const UserAlbum = ({ album }) => (
  <ListGroup>
    <ListGroupItem style={{ minHeight: '100px' }}><h4>{album.title}</h4></ListGroupItem>
  </ListGroup>
);

export default UserAlbum;
