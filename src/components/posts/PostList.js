import React from 'react'
import { Link } from 'react-router-dom'
import PostSummary from './PostSummary'

const PostList = ({ posts }) => {
    return (
        <div className="project-list section">

            {
                posts && posts.map(post => {
                    return (
                        <Link to={'/b/' + post.branchId + '/p/' + post.id}>
                            <PostSummary post={post} key={post.id} />
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default PostList