import React from 'react';
import { connect } from 'react-redux';

import { Wrapper } from '../../components';

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

  render() {
    return (
      <Wrapper>
        <h3>Home Page</h3>
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

