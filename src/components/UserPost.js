import React from 'react';
import {
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import User from '.';

const UserPost = ({ post }) => (
  <CardBody>
    <CardTitle>{post.title}</CardTitle>
    <CardText>{post.body}</CardText>
  </CardBody>
);

export default UserPost;
