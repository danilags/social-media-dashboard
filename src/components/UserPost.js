import React from 'react';
import {
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';

const UserPost = ({ post }) => (
  <CardBody>
    <CardTitle>{post.title}</CardTitle>
    <CardText>{post.body}</CardText>
  </CardBody>
);

export default UserPost;
