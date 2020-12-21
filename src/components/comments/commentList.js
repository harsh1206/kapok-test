import React from 'react'
import CommentSummary from './commentSummary'

const CommentList = ({ comment }) => {
    //TODO comments keys change karna hai
    return (
        <div className="project-list section">
            {
                comment && comment.map(comment => {
                    return (
                        <CommentSummary comment={comment} key={comment}/>
                    )
                })
            }

        </div>
    )
}


export default CommentList