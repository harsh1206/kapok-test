import React, { Component } from "react";
import BranchRecommendations from "./BranchRecommendations";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    // console.log(this.props);
    const { posts } = this.props;
    const { branches } = this.props;
    const { branchesToPost } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">

          <div className="col s12 m6">
          
            <div className="card  z-depth-3 post-summary hi">
                <Link to="/createPost">
              <div className="grey lighten-3 create-post ">
                <input
                  className=""
                  placeholder="Write a post or start a discussion"
                ></input>
              </div>
              </Link>
            </div>
        
            <PostList posts={posts} branchesToPost={branchesToPost}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <BranchRecommendations branches={branches}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.firebase.auth,
    posts: state.firestore.ordered.posts,
    branches: state.firestore.ordered.branches,
    branchesToPost: state.firestore.data.branches,
  };
};

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc']},
    {collection: 'branches'}
])
)(Home);
