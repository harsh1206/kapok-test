import React, { Component } from "react";
import PostList from "../posts/PostList";
import { hot } from 'react-hot-loader/root';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";


class PostListingBranch extends Component {
  render() {
// function PostListingBranch(props) {

    // console.log(this.props);
    const { posts } = this.props;
    const { branch } = this.props
    // const { branches } = this.props;
    console.log('branch')
    console.log(branch)
    console.log('props')
    console.log(this.props)
    return (
      <div className="dashboard container">
        <div className="row">
          
          <div className="container section post-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title ">
                  <h3>{branch?.title}</h3>
                </span> 
                <p>{branch?.discription}</p> 
              </div>
            </div>
          </div>
                
          <div className="card  z-depth-3 post-summary hi">
            <Link to="/createPost">
              <div className="grey lighten-3 create-post ">
                <input
                  className=""
                  placeholder="Write a post in this branch" 
                ></input>
              </div>
            </Link>
          </div>
        
          <PostList posts={posts} />
          </div>
        
      </div>

    );
  }
}

const mapStatetoProps = (state, ownprops) => {
  console.log("State")
  console.log(state)
  console.log("OwnProps")
  console.log(state)

  const posts = state.firestore.ordered.posts;
  const branchId = ownprops.match.params.branchId;
  const branches = state.firestore.data.branches;
  const branch = branches ? branches[branchId] : null;
  console.log("branches")
  console.log(branches)
    return { 
      //  auth: state.firebase.auth,
        posts: posts,
        branch: branch
    }
};

export default compose(
  // hot,
  connect(mapStatetoProps),
  firestoreConnect([
    { collection: 'branches' }, { collection: 'posts', orderBy: ['createdAt', 'desc'] }
])
)(hot(PostListingBranch));


