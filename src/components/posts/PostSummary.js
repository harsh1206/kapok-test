import React from 'react';
import {upvotePost,downvotePost} from '../../store/actions/postActions';
import {removeUpvoteFromPost,removeDownvoteFromPost} from '../../store/actions/postActions';
import { connect } from "react-redux";
import moment from 'moment';

const PostSummary = ({post,upvotePost,downvotePost,removeUpvoteFromPost,removeDownvoteFromPost}) => {
  console.log('post')
  console.log(post.createdAt)
  console.log(moment(post.createdAt.toDate().toString()).fromNow());
  const handleUpvote = (e) => {
      
      e.preventDefault();
      
      if(!post.isUpvoted && !post.isDownvoted)
      {   
        upvotePost(post);  
        return;
      }

      if(post.isDownvoted)
      {
        removeDownvoteFromPost(post);
        upvotePost(post);
        return ;
      }

      if(post.isUpvoted)
      {
        removeUpvoteFromPost(post);
        return ;
      }

    }

    const handleDownvote  = (e) => {
         
      e.preventDefault();

      if (!post.isUpvoted && !post.isDownvoted){
        downvotePost(post);
        return;
      }
      
       if (post.isUpvoted) {
         removeUpvoteFromPost(post);
         downvotePost(post);
         return;
       }

        if (post.isDownvoted) {
          removeDownvoteFromPost(post);
          return;
        }


    }

    return (
      <div className="card  z-depth-3 post-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">
            [{post.branchId}] - {post.title}
          </span>
          <p>{post.content}</p>
          <p className="grey-text">{post.authorFirstName} - {moment(post.createdAt.toDate().toString()).fromNow()} </p>
          {/* {moment(post.createdAt.toDate().toString()).fromNow()} */}
          {/* <span className="right">{Object.keys(post.comment).length}</span> */}
          <i className="material-icons right">forum</i>
          <span className ={`${post.isDownvoted ? "blue-text" : "" }`} onClick={handleDownvote}><i className="material-icons right">arrow_downward</i></span>
          <span className={`${post.isUpvoted ? "red-text" : "" }`} onClick={handleUpvote}><i className="material-icons right">arrow_upward</i></span>
        </div>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {

  return {
    upvotePost: (post) => dispatch(upvotePost(post)),
    downvotePost: (post) => dispatch(downvotePost(post)),
    removeUpvoteFromPost: (post) => dispatch(removeUpvoteFromPost(post)),
    removeDownvoteFromPost: (post) => dispatch(removeDownvoteFromPost(post))
  };
};

export default connect(null, mapDispatchToProps)(PostSummary)