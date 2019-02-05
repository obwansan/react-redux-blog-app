import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component {
  
  // Whenever the component rerenders it will call the fetchUser action creator
  // that gets the user object from the API, then dispatches it to the reducers
  // as the payload on an action.
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>User Header</div>;
  }
}

export default connect(null, {fetchUser: fetchUser})(UserHeader);
