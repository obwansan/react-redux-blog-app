// Usually use a switch statement because a reducer usually deals
// with more than one action type.
// The first argument (state) is whatever was returned by this reducer the 
// last time it ran. So if it doesn't return the action.payload it just 
// returns the same piece of state it returned last time ('returns' here means 
// assigning it to a property on the redux state object (the 'store') created in the 
// combineReducers function).

export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

// This reducer is just an anonymous function that returns an action's
// payload dependent on it's type (true of all reducers?).
// Returns it to where? To the object property the reducer is assigned to 
// in the combineReducers function (i.e. to 'posts').
// How is the dispatch function in the fetchPosts action creator connected 
// to this reducer function? 