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
import { getApiData, getDetails } from '../../actions';
import { GET_ALL_POSTS, GET_ALL_ALBUMS } from '../../constants';

class UserDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idUser: this.props.match.params.id,
      userDetails: null,
      userPosts: [],
      userAlbums: [],
      isFetch: true
    }
  }

  async componentWillReceiveProps(nextProps) {
    const { posts } = nextProps;
    if (!posts.isFetch && posts.postData.status_code === 200 && this.state.isFetch) {
      const { data } = posts.postData;
      this.findUserPost(data);
      this.setState({
        isFetch: false,
      })
    }
  }

  findUserPost(data) {
    const userPosts = data.filter(item => {
      return item.userId === parseInt(this.state.idUser)
    });
    this.setState({
      userPosts
    })
  }
  
  componentDidMount() {
    this.getUserDetails();
  }

  async getUserDetails() {
    const requestUser = await this.props.getDetails({ url: 'users', id: this.state.idUser });
    const { data } = requestUser;
    await this.setState({ userDetails: data });
    this.props.getApiData({ url: 'posts', type: GET_ALL_POSTS });
    this.props.getApiData({ url: 'albums', type: GET_ALL_ALBUMS });
  } 

  render() {
    const { userDetails } = this.state;
    const UserItem = userDetails === null ? <h3>Loading...</h3> : <User user={userDetails} />
    return (
      <Wrapper>
        <Row>
          <Col>
            { UserItem }
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              {
                this.state.userPosts.map((post, index) => (
                  <CardBody>
                    <CardTitle>{post.title}</CardTitle>
                    <CardText>{post.body}</CardText>
                  </CardBody>
                ))
              }
            </Card>
          </Col>
          <Col>
            <Card>
              <p>Album</p>
            </Card>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  dataUser: state.usersReducer,
  posts: state.postReducer
});

const mapDispatchToProps = dispatch => ({
  getApiData: (params) => dispatch(getApiData(params)),
  getDetails: (params) => dispatch(getDetails(params))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
