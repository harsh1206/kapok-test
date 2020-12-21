import React from 'react';


const commentSummary = (post) => {
    return (
        <div className="card  z-depth-3 post-summary">
          <div className="card-content grey-text text-darken-3">
            <p>{post.comment}</p>
            {/* <p className="grey-text">Ved Vyapak</p> */}
          </div>
        </div>
      );
} 

export default commentSummary;