import {combineReducers} from 'redux';
import postsReducer from './postsReducer';

// combineReducers() somehow creates the redux state object 
// (the 'store') whose properties are the keys in the object 
// passed to combineReducers(). Those properties contain the 
// data (bits of state) returned by the assigned value/name 
// e.g. the posts property holds the data returned by 
// the postsReducer reducer.
// So, state.posts in mapStateToProps() is accessing this posts
// property.
export default combineReducers({
  posts: postsReducer
});