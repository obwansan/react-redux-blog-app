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
    const {user} = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps, {fetchUser: fetchUser})(UserHeader);
