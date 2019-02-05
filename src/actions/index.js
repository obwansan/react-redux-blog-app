import jsonPlaceholder from '../apis/jsonPlaceholder';

// How do action creators have access to the redux dispatch function? 
// Why don't you need to import it like you do connect() from react-redux?
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};