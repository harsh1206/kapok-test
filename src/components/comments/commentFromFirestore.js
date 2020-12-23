import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import CommentList from '../comments/commentList'

function CommentFromFirestore(props) {

    const { comm } = props;
    if (comm) {
        return (
          <div className="container section post-details">
              <CommentList comment={comm} postId={props.postId} />
          </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading Comment...</p>
            </div>
        )
    }


}

const mapStatetoProps = (state) => {
    const comments = state.firestore.ordered.comments;
    return {
        comm: comments
    }
};
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'comments', orderBy: ['commentCreatedAt', 'desc'] }
    ])
)(CommentFromFirestore)