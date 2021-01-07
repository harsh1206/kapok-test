import React from 'react'
import { Link } from 'react-router-dom'
import PostSummary from './PostSummary'



const PostList = ({ posts, branchesToPost, branch }) => {
    console.log(branchesToPost)

    const LinkToPostSummary = (post, branchesToPost) => {
        return(
            <Link to={'/b/' + post.branchId + '/p/' + post.id}>
                <PostSummary post={post}  key={post.id} branchesToPost={branchesToPost} />
            </Link>
        )
    }
    
    return (
        <div className="project-list section">

            {
                posts && posts.map(post => {
                    return (
                        branch ? 
                            (branchesToPost[post.branchId].title == branch.title ? 
                            LinkToPostSummary(post, branchesToPost) : null) : 
                            LinkToPostSummary(post, branchesToPost)
                    )
                })
            }

        </div>
    )
}

export default PostList