import React from 'react'
import CommentSummary from './commentSummary'

const CommentList = ({ comment, postId }) => {
    //TODO comments keys change karna hai
    console.log("commentssssssss")
    console.log(comment)
    
    // const comment = comments.comments;
    return (
        <div className="project-list section">
            {
                comment && comment.map(comment => {
                    // if(comment.postId == postId)
                    
                    if(comment.postId === postId){
                        return (
                            <CommentSummary comment={comment} key={comment.id}/>
                        )
                    }
                })
            }
        </div>
    )
}


export default CommentList