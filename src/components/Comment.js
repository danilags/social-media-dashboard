import React from 'react';
import {
  Alert,
  CardText
} from 'reactstrap';

const Comment = (props) => (
  <Alert>
    <p><strong>{props.item.email}</strong></p>
    <CardText>
      {props.item.body}
    </CardText>
  </Alert>
)

export default Comment;
