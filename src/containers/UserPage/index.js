import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card
} from 'reactstrap';

import { Wrapper, User } from '../../components';
import { getApiData } from '../../actions';
import { GET_ALL_USERS } from '../../constants';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  componentDidMount() {
    this.props.getApiData({ url: 'users', type: GET_ALL_USERS });
  }

  renderDataUser() {
    const { isFetch, userData } = this.props.dataUser;
    if (isFetch) {
      return (
        <h3>Loading...</h3>
      )
    } 
    return userData.data.map((item, index) => <Col key={index} md={6}><User user={item} /></Col>)
  }

  render() {
    return (
      <Wrapper>
        <Row>
          { this.renderDataUser() }         
        </Row>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  dataUser: state.usersReducer
});

const mapDispatchToProps = dispatch => ({
  getApiData: (params) => dispatch(getApiData(params))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
