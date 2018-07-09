const initialState = {
	userData: {},
  isFetch: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PENDING_FETCH': {
      return {
        ...state,
      }
    }
    default: return state;
  }
}

export default usersReducer;
