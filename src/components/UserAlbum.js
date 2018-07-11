import React from 'react';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import User from '.';

const UserAlbum = ({ album }) => (
  <ListGroup>
    <ListGroupItem>{album.title}</ListGroupItem>
  </ListGroup>
);

export default UserAlbum;
