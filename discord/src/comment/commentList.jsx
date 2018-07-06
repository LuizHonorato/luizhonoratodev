import React, {Component} from 'react'
import {connect} from 'react-redux'
import CommentBox from './commentBox'
 
class CommentList extends Component {

    render() {
        const comments = this.props.comments || []
        return ( 
            <div>
                <h4 className='title-list'>Comentários:</h4>
                {comments.map((comment) => (
                    <CommentBox key={comment.id} id={comment.id} post={comment.post} liked={comment.liked} 
                        disliked={comment.disliked}  />
                ))}
        </div>
        )
    }
} 
const mapStateToProps = state => ({comments: state.comments})
export default connect(mapStateToProps, null)(CommentList)