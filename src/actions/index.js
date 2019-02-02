import jsonPlaceholder from '../apis/jsonPlaceholder';

// The action creator does an asynchronous get request to the /posts endpoint
// and assigns the response to the payload property.

// ES6 version: Don't need a return statement, 
// or parentheses around the dispatch argument, 
// or curly braces around the callback function.
// Just defining fetchPosts as a function that (asynchronously) 
// returns a function, that does a get request to the api endpoint
// and dispatches an action (object) containing the get response.
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response });
  };

// This is the ES5 version 

// export const fetchPosts = function() {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get('/posts');

//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };