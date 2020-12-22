import React from 'react';
import moment from 'moment';


const commentSummary = ({comment}) => {
  console.log(comment)
  console.log(comment.content)
  
    return (
        <div className="card  z-depth-3 post-summary">
          <div className="card-content grey-text text-darken-3">
            <p>{comment.content}</p>
            <p className="grey-text">{comment.authorFirstName + " " + comment.authorLastName}</p>
            <p className="grey-text">{moment(comment.commentCreatedAt.toDate().toString()).fromNow()}</p>
          </div>
        </div>
      );
} 

export default commentSummary;