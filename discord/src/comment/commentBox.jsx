import React from 'react'

const CommentBox = ({comment}) => {
    return (
        <p className={'comment'}>{comment.post}</p>
    )
}

export default CommentBox