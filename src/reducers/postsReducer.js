// Usually use a switch statement because a reducer usually deals
// with more than one action type.
export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
