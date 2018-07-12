import React from 'react';
import { connect } from 'react-redux';

import { getApiData, getDetails } from '../../actions';
import { Wrapper, PostCard, Comment } from '../../components';
import { GET_ALL_COMMENTS } from '../../constants';

class PostDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      idPost: this.props.match.params.id,
      postDetails: null
    }
  }

  componentDidMount() {
    this.getPostDetails();
  }

  async getPostDetails() {
    const request = await this.props.getDetails({ url: 'posts', id: this.state.idPost });
    const { data } = request;
    await this.setState({ postDetails: data })
    this.props.getApiData({ url: 'comments', type: GET_ALL_COMMENTS });
  }

  render() {
    const { postDetails } = this.state;
    const { commemtList } = this.props.posts;
    const detailsPost = postDetails === null ? <h4>Loading...</h4> : <PostCard item={postDetails} />
    return (
      <Wrapper>
        {detailsPost}
        {
          commemtList.data.map((comment, index) => {
            if (comment.postId === postDetails.id) {
              return (
                <Comment key={index} item={comment} />
              )
            }
          })
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);