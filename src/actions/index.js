import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Seems that getState doesn't need to be imported into file
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // Loop over the posts array (objects) and return an array of unique (i.e. no duplicate)
  // user IDs (using lodash functions)
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // Loop over the IDs, call the appropriate action creator on it, and dispatch it.
  // Dispatching it means redux-thunk (middleware) will get the user object, based on the ID
  // and dispatch the action. (Only doing it once for each unique ID)
  userIds.forEach(id => dispatch(fetchUser(id)));
}

// How do action creators have access to the redux dispatch function? 
// Why don't you need to import it like you do connect() from react-redux?
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

/*
export const fetchUser = (id) => dispatch => {
  // Call the memoized version of fetchUser inside our fetchUser action creator
  _fetchuser(id, dispatch);
};
*/

// ES6 refactoring: We have a function (fetchUser) that RETURNS an anonymous function
// (dispatch =>) that CALLS the function _fetchuser. Remember the return keyword isn't 
// used in ES6.

// export const fetchUser = id => dispatch => _fetchuser(id, dispatch);

/* ES5 version:
   function fetchUser(id) {
      return function(dispatch) {
        _fetchuser(id, dispatch)
      }
 }
 */

// The underscore indicates a 'private' function that another developer
// shouldn't use unless they know what they're doing.
// memoizing the function means it will only make one network request.
// If it's called again it will return (dispatch) the same data it got 
// the first time it was called.

// const _fetchuser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });