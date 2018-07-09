// import all reducers and group under combineReducers
import { combineReducers } from 'redux';

import usersReducer from './usersReducer';

const rootReducer = combineReducers({
	usersReducer,
});

export default rootReducer;
