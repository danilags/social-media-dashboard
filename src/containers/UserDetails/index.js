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
  Card,
} from 'reactstrap';

import { Wrapper, User, UserPost, UserAlbum } from '../../components';
import { getApiData, getDetails } from '../../actions';
import { GET_ALL_POSTS, GET_ALL_ALBUMS, GET_ALL_COMMENTS } from '../../constants';
import ContentPost from './ContentPost';

class UserDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idUser: this.props.match.params.id,
      userDetails: null,
      userPosts: [],
      userAlbums: [],
      isFetchPost: true,
      isFetchAlbum: true,
      isFetchComment: true,
    }
  }

  async componentWillReceiveProps(nextProps) {
    const { posts } = nextProps;
    if (posts.postData.status_code === 200 && this.state.isFetchPost) {
      const { data } = posts.postData;
      const userPosts = data.filter(item => item.userId === parseInt(this.state.idUser));
      this.setState({
        isFetchPost: false,
        userPosts
      })
    } else if (posts.albumData.status_code === 200 && this.state.isFetchAlbum) {
      const { data } = posts.albumData;
      const userAlbums = data.filter(item => item.userId === parseInt(this.state.idUser));
      this.setState({
        isFetchAlbum: false,
        userAlbums
      })
    }
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
    this.props.getApiData({ url: 'comments', type: GET_ALL_COMMENTS });
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
            <h3>Posts</h3>
            <ContentPost 
              item={this.state.userPosts}
            />
          </Col>
          <Col>
            <h3>Albums</h3>
            <Card>
              {this.state.userAlbums.map((album, index) => (<UserAlbum key={index} album={album} />))}
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
