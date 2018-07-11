import React from 'react';
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card,
  NavLink
} from 'reactstrap';

const User = ({ user }) => (
  <Card>
    <a href={`user/${user.id}`} style={styles.container}>
      <CardBody>
        <CardTitle>{user.name}</CardTitle>
        <CardSubtitle>{user.phone}</CardSubtitle>
        <CardText>
          Company: {user.company.name} 
        </CardText>
        <CardText>
          Address: {user.address.street}, {user.address.suite}, {user.address.city} - {user.address.zipcode}
        </CardText>
        {/* <Button>Details</Button> */}
      </CardBody>
    </a>
  </Card>
);

const styles = {
  container: {
    flex: 1,
    margin: '10px 0px',
    height: '200px',
    minHeight: '200px',
    maxHeight: '200px',
  }
}

export default User;