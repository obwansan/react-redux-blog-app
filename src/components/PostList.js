import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends React.Component {
  
  // When PostList is rendered, componentDidMount is called, which 
  // calls the fetchposts action creator.
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

export default connect(null, {fetchPosts: fetchPosts})(PostList);