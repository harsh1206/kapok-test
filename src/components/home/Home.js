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
    return (
      <div className="dashboard container">
        {/* <div class="row">
          <Link to="/createPost">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6 post-form">
                <i class="material-icons prefix">mode_edit</i>
                <textarea
                  id="icon_prefix2"
                  class="materialize-textarea"
                ></textarea>
                <label for="icon_prefix2">Write a post or start a discussion</label>
              </div>
            </div>
          </form>
          </Link>
        </div> */}

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
        
            <PostList posts={posts} />
          </div>
          <div className="col s12 m5 offset-m1">
            <BranchRecommendations />
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts,
  };
};

export default compose(
  connect(mapStatetoProps),
  firestoreConnect(() => ["posts"])
)(Home);
