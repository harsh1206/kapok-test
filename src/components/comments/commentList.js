import React from 'react'
import CommentSummary from './commentSummary'
import { connect } from "react-redux";
import numberOfCommentFunction from '../../store/actions/postActions'

const CommentList = ({ comment, postId , post}) => {
    let numberOfComment = 0;
    // console.log("props.posts")
    // console.log(props)


    return (
        <div className="project-list section">
            {
                comment && comment.map(comment => {                    
                    if(comment.postId === postId && comment.parentId == null){
                        numberOfComment++;
                        return (
                            <CommentSummary comment={comment} key={comment.id}/>  
                        )
                    }
                })
            }
        </div>
    )
}
//TODO comments number add karna hai post ko call karke
//TODO comments nested

// const mapDispatchToProps = (dispatch) => {
//     console.log("post");
//     console.log(post);
//     console.log(numberOfComment)
//     return {
//         numberOfCommentFunction: (numberOfComment) => dispatch(numberOfCommentFunction(numberOfComment))
//     };
// };

export default (CommentList)