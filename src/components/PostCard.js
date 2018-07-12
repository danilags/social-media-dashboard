import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

const PostCard = (props) => (
  <Card style={{ minHeight: '200px', margin: '10px 0px', boxShadow: '1px 6px 9px 1px #ccc' }}>
    <CardBody>
      <CardTitle>{props.item.title}</CardTitle>
      <CardText>{props.item.body}</CardText>
    </CardBody>
  </Card>
);

export default PostCard;
