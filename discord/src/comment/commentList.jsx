import React from 'react'
import {connect} from 'react-redux'

import CommentBox from './commentBox'

const CommentList = ({comments}) => {

    return (
        <div>
            <h4 className='title-list'>Comentários:</h4>
            {comments.map((comment) => (
                    <CommentBox key={comment.id} comment={comment}  />      
            ))}
        </div>
    )
} 
const mapStateToProps = state => ({comments: state.comments})
export default connect(mapStateToProps, null)(CommentList)