// import all reducers and group under combineReducers
import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import postReducer from './postReducer';


const rootReducer = combineReducers({
	usersReducer,
	postReducer,
});

export default rootReducer;
