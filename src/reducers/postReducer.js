import { 
  GET_ALL_POSTS,
  GET_ALL_ALBUMS,
  GET_ALL_PHOTOS,
  GET_ALL_COMMENTS
} from '../constants';

const initialState = {
	postData: {
    data: [],
    status_code: 0
  },
  albumData: {
    data: [],
    status_code: 0
  },
  commemtList: {
    data: [],
    status_code: 0
  },
  photoList: {
    data: [],
    status_code: 0
  },
  isFetch: false
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_POSTS}_PENDING`: {
      return {
        ...state,
          postData: initialState.postData,
          isFetch: true
      }
    }
    case GET_ALL_POSTS: {
      const { data, status } = action.payload
      return {
        ...state, 
          postData: {
            ...state.postData, data, status_code: status
          },
          isFetch: false
      }
    }
    case `${GET_ALL_ALBUMS}_PENDING`: {
      return {
        ...state,
          albumData: initialState.albumData,
          isFetch: true
      }
    }
    case GET_ALL_ALBUMS: {
      const { data, status } = action.payload
      return {
        ...state, 
          albumData: {
            ...state.albumData, data, status_code: status
          },
          isFetch: false
      }
    }
    case `${GET_ALL_COMMENTS}_PENDING`: {
      return {
        ...state,
          commemtList: initialState.commemtList,
          isFetch: true
      }
    }
    case GET_ALL_COMMENTS: {
      const { data, status } = action.payload
      // const lastStatePost = postData.data;
      // console.log('lastStatePost ', lastStatePost);
      // console.log('DATA COMMENT ', data);
      // for (let i = 0; i < lastStatePost.length-70; i++) {
      //   for (let j = 0; j < data.length-400; j++) {
      //     // console.log('lastStatePost[i].id === data.postId ', parseInt(lastStatePost[i].id) === parseInt(data[j].postId));
      //     if (lastStatePost[i].id === data[j].postId) {
      //       let lastPost = lastStatePost[i];
      //       let newObject = { ...lastPost, commentPost: [  ...data ]  }
      //       console.log('newObject ', newObject);
      //       lastStatePost.push(newObject);
      //     }
      //   }
      // }
      return {
        ...state, 
          commemtList: {
            ...state.commemtList, data, status_code: status
          },
          isFetch: false
      }
    }
    case `${GET_ALL_PHOTOS}_PENDING`: {
      return {
        ...state,
          photoList: initialState.photoList,
          isFetch: true
      }
    }
    case GET_ALL_PHOTOS: {
      const { data, status } = action.payload;
      return {
        ...state, 
          photoList: {
            ...state.photoList, data, status_code: status
          },
          isFetch: false
      }
    }
    default: return state;
  }
}

export default postReducer;
