import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// combineReducers() somehow creates the redux state object 
// (the 'store') whose properties are the keys in the object 
// passed to combineReducers(). Those properties contain the 
// data (action creator payloads) returned by the assigned reducer 
// function. E.g. the posts property holds the data returned by the 
// postsReducer reducer.
// So, state.posts in mapStateToProps() is accessing this posts
// property. The 'state' in state.posts is this object passed to 
// the combineReducers function.
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});

// What the combineReducers fucntion does:
// "Turns an object whose values are different reducer functions, 
// into a single reducer function. It will call every child reducer, 
// and gather their results into a single state object, whose keys 
// correspond to the keys of the passed reducer functions.""