import { 
  GET_ALL_POSTS,
  GET_ALL_ALBUMS
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
    default: return state;
  }
}

export default postReducer;
