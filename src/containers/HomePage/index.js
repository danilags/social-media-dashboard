import React from 'react';
import { connect } from 'react-redux';

import { Wrapper, PostCard } from '../../components';

import { GET_ALL_POSTS } from '../../constants';
import { getApiData } from '../../actions';


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getApiData({ url: 'posts', type: GET_ALL_POSTS  })
  }

  renderSource() {
    const { postData, isFetch } = this.props.posts;
    if (isFetch) {
      return <h4>Loading...</h4>
    } 
    return postData.data.map((item, index) => <a key={index} href={`post/${item.id}`}><PostCard item={item} /></a>)
  }

  render() {
    return (
      <Wrapper>
        {this.renderSource()}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer
});

const mapDispatchToProps = dispatch => ({
  getApiData: (params) => dispatch(getApiData(params))
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

