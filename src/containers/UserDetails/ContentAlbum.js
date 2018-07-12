import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  CardText,
  Media,
} from 'reactstrap';

import { UserAlbum, ModalImage } from '../../components';

class ContentAlbum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageOpen: false,
      imageItem: {
        title: '',
        url: '',
      }
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      imageOpen: !this.state.imageOpen
    })
  }

  renderModalImage() {
    const { imageItem } = this.state;
    return (
      <ModalImage 
        isOpen={this.state.imageOpen}
        item={this.state.imageItem}
        onToggle={this.toggle}
      />
    )
  }

  handleSetItem(item) {
    this.setState({
      imageItem: {
        title: item.title,
        url: item.url
      }
    })
  }

  renderSource() {
    const { photoList } = this.props.posts;
    return (
      <CardBody>
        { this.renderModalImage() }
        <Card>
          {this.props.item.map((album, index) => {
            let child = [];
            photoList.data.map((photo, idx) => {
              if (photo.albumId === album.id) {
                child.push(photo);
              }
            })
            return (
              <div>
                <UserAlbum key={index} album={album} />
                {
                  child.map((item, idx) => (
                    <Media key={idx} style={{ padding: '10px', margin: '5px' }}>
                      <Media 
                        style={{ width: '80px' }} 
                        middle left 
                        onClick={() => {
                          this.toggle()
                          this.handleSetItem(item)
                        }}
                      >
                        <img style={{ width: '100%', height: 'auto' }} src={item.url} alt="Generic placeholder image" />
                      </Media>
                      <Media body style={{ margin: '5px' }}>
                        <CardText>
                          {item.title}
                        </CardText>
                      </Media>
                    </Media>
                  ))
                }
              </div>
            )
          })}
        </Card>
        
      </CardBody>
    )
  }

  render() {
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
export default connect(mapStateToProps, null)(ContentAlbum);
