import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

function PostDetails(props) {
    const { post } = props;
    // console.log(post);
   

    if (post) {
        return (
          <div className="container section post-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title ">
                  <h3>{post.title}</h3>{" "}
                </span>
                <p>{post.content}</p>
              </div>
              <div className="card-action lighten-4 grey-text">
                <div>
                  Posted by {post.authorFirstName} {post.authorLastName} in{" "}
                  {post.branchId}
                </div>

                {/* <div>{post.createdAt}</div> */}
              </div>
            </div>
          </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading Project...</p>
            </div>
        )
    }


}

const mapStatetoProps = (state, ownProps) => {
    const postId = ownProps.match.params.postId;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[postId] : null;
    return {
        post: post
    }
};

export default compose(
    connect(mapStatetoProps),
    firestoreConnect(() => ['posts'])
)(PostDetails)