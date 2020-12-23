import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import CommentSummary from '../comments/commentSummary'

function CommentFromFirestore(props) {

    const { comment } = props;
    if (comment) {
        return (
          <div className="container section post-details">
              <div className="project-list section">
                {
                    comment && comment.map(comment => { 
                        console.log()
                        if(props.commentId === comment.parentId)
                            return (
                                <CommentSummary comment={comment} key={comment.id}/>
                            )
                    })
                }
                </div>
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
        comment: comments
    }
};
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'comments', orderBy: ['commentCreatedAt', 'desc'] }
    ])
)(CommentFromFirestore)