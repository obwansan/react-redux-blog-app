// If the reducer 'sees' an action with the type 'FETCH_USER'
// it will add the action.payload to the state array.
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
      return state;
  }
}