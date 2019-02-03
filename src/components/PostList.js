import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends React.Component {
  
  // When PostList is rendered, componentDidMount is called, which 
  // calls the fetchPosts action creator.
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// How to get data from redux part of application into react part?
// Use mapStateToProps and pass it to connect().
// mapStateToProps is called with the state object from redux store.
// The state object has a property called 'posts' (created in combineReducers()).
// which contains the data returned by the postsReducer reducer (i.e. an array 
// of posts) returned from the get request to the jsonPlaceholder API.
const mapStateToProps = (state) => {
  return { posts: state.posts };
}

// Every time our reducers run, mapStateToProps will be called, returning 
// a props object accessible to our component, PostList, as this.props.
export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostList);