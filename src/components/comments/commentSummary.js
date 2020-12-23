import React from 'react';
import moment from 'moment';
import {upvotePost,downvotePost} from '../../store/actions/commentActions';
import {removeUpvoteFromPost,removeDownvoteFromPost} from '../../store/actions/commentActions';
import { connect } from "react-redux";
import CreateComment from './createComment'
import NestedComments from './nestedComments'
 

const commentSummary = ({comment,upvotePost,downvotePost,removeUpvoteFromPost,removeDownvoteFromPost}) => {
  

  const handleUpvote = (e) => {
      
      e.preventDefault();
      
      if(!comment.isUpvoted && !comment.isDownvoted)
      {   
        upvotePost(comment);  
        return;
      }

      if(comment.isDownvoted)
      {
        removeDownvoteFromPost(comment);
        upvotePost(comment);
        return ;
      }

      if(comment.isUpvoted)
      {
        removeUpvoteFromPost(comment);
        return ;
      }

    }

    const handleDownvote  = (e) => {
         
      e.preventDefault();

      if (!comment.isUpvoted && !comment.isDownvoted){
        downvotePost(comment);
        return;
      }
      
       if (comment.isUpvoted) {
         removeUpvoteFromPost(comment);
         downvotePost(comment);
         return;
       }

        if (comment.isDownvoted) {
          removeDownvoteFromPost(comment);
          return;
        }


    }
  
    return (
        <div className="card  z-depth-3 post-summary">
          <div className="card-content grey-text text-darken-3">
            <p>{comment.content}</p>
            <p className="grey-text">{comment.authorFirstName + " " + comment.authorLastName}</p>
            <p className="grey-text">{moment(comment.commentCreatedAt.toDate().toString()).fromNow()}</p>
            <span className ={`${comment.isDownvoted ? "blue-text" : "" }`} onClick={handleDownvote}><i className="material-icons right">arrow_downward</i></span>
            <span className="right">{comment.downvotes ? Object.keys(comment.downvotes).length : null}</span>
            <span className={`${comment.isUpvoted ? "red-text" : "" }`} onClick={handleUpvote}><i className="material-icons right">arrow_upward</i></span>
            <span className="right">{comment.upvotes ? Object.keys(comment.upvotes).length : null}</span>
            <div className="container">
            <CreateComment parentId={comment.id} postId={comment.postId}/>
            </div>
          </div>
          <NestedComments postId={comment.postId} commentId={comment.id}/>
        </div>
      );
} 

const mapDispatchToProps = (dispatch) => {

  return {
    upvotePost: (comment) => dispatch(upvotePost(comment)),
    downvotePost: (comment) => dispatch(downvotePost(comment)),
    removeUpvoteFromPost: (comment) => dispatch(removeUpvoteFromPost(comment)),
    removeDownvoteFromPost: (comment) => dispatch(removeDownvoteFromPost(comment))
  };
};

export default connect(null, mapDispatchToProps)(commentSummary);