import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  Alert,
  CardText
} from 'reactstrap';

import { UserPost } from '../../components';

class ContentPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  renderSource() {
    const { commemtList } = this.props.posts;
    return (
      <CardBody>
        {
          this.props.item.map((post, index) => {
            const parent = <UserPost key={index} post={post} />
            let child = [];
            commemtList.data.map((comment, idx) => {
              if (post.id === comment.postId) {
                child.push(comment);
              }
            })
            return (
              <div>
                <UserPost key={index} post={post} />
                {child.map((item, index) => (
                  <Alert>
                    <p>{item.email}</p>
                    <CardText>
                      {item.body}
                    </CardText>
                  </Alert>
                ))}
              </div>
            );
          })
        } 
      </CardBody>
    )
  }

  render() {
    console.log('PROPS ', this.props);
    console.log('STATE ', this.state);
    return (
      <Card>
        { this.renderSource() }
      </Card>
    )
  }
}


const mapStateToProps = state => ({
  dataUser: state.usersReducer,
  posts: state.postReducer
});

// const mapDispatchToProps = dispatch => ({
//   getApiData: (params) => dispatch(getApiData(params)),
//   getDetails: (params) => dispatch(getDetails(params))
// })

export default connect(mapStateToProps, null)(ContentPost);
