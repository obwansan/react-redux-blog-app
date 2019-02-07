import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  
  // Whenever PostList is rendered, componentDidMount is called, which 
  // calls the fetchPosts action creator.
  componentDidMount() {
    this.props.fetchPostsAndUsers();
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
            <UserHeader userId={post.userId} />
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
// mapStateToProps is called with the redux store state object.
// The state object has a property called 'posts' (created in combineReducers()).
// which contains the data returned by the postsReducer reducer (i.e. an array 
// of posts) which, in turn, is returned by the action creator from the get request 
// to the jsonPlaceholder API.
const mapStateToProps = (state) => {
  return { posts: state.posts };
}

// Every time our reducers run, mapStateToProps will be called, returning 
// a props object accessible to our component, PostList, as this.props

// [Still not sure how the second argument to connect() works. mapStateToProps is
// connected to the PostList component, but what's happening with fetchPosts? It returns
// the array of posts objects that are stored on the posts property on the redux state 
// object and then mapped to the posts property on the props object. So why is it needed
// as the second argument here? ]
export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);