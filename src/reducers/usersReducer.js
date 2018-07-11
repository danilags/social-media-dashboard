import { 
  GET_ALL_USERS
} from '../constants';

const initialState = {
	userData: {
    data: [],
    status_code: 0
  },
  postData: {
    data: [],
    status_code: 0,
  },
  commentData: {
    data: [],
    status_code: 0,
  },
  userDetails: null,
  isFetch: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_USERS}_PENDING`: {
      return {
        ...state,
          userData: initialState.userData,
          isFetch: true
      }
    }
    case GET_ALL_USERS: {
      const { data, status } = action.payload
      return {
        ...state, 
          userData: {
            ...state.userData, data, status_code: status
          },
          isFetch: false
      }
    }
    default: return state;
  }
}

export default usersReducer;
