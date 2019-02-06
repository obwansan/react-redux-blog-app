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
    // this.props.users is an array of user objects. find() is a JS array function
    // that loops over the array and returns the first element that meets the condition.
    const user = this.props.users.find(user => user.id === this.props.userId);

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return {users: state.users};
}

export default connect(mapStateToProps, {fetchUser: fetchUser})(UserHeader);
