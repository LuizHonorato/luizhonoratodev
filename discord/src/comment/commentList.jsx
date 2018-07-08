import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {remove, like, dislike} from './commentActions'
import likeImage from '../common/img/like.png'
import heartImage from '../common/img/heart.png'
import heartBrokenImage from '../common/img/dislike-empty.png'
import dislikeImage from '../common/img/dislike.png'
 
const CommentList = props => {
    const comments = props.comments || []
    return (
        <div>
        <h4 className='title-list'>Comentários ({comments.length}):</h4>
        {comments.map(comment => (
            <ul key={comment.id} className='comment-box'>
                <h4 className='user'>{comment.user + ' disse:'}</h4>
                <div className='row valign-wrapper'>
                    <div className='col s10'>
                        <li className='comment'>{comment.post}</li>
                    </div>
                    <div className='col s2'>
                        <a onClick={() => props.remove(comment.id)} className='btn-floating red'><i className='material-icons'>close</i></a>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col s1 like-btn'>
                        <a onClick={() => props.like(comment.id)} className='like-btn'><img src={!comment.liked ? likeImage: heartImage}  alt="Curtir" />({!comment.liked ? '0' : '1'})</a>
                    </div>
                    <div className='col s1 like-btn'>
                        <a onClick={() => props.dislike(comment.id)} className='like-btn'><img src={!comment.disliked ? heartBrokenImage: dislikeImage}  alt="Curtir" />({!comment.disliked ? '0' : '1'})</a>
                    </div>
                </div>
            </ul>
        ))}
    </div>
    )
}

const mapStateToProps = state => ({comments: state.comments})
const mapDispatchToProps = dispatch => bindActionCreators({remove, like, dislike}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CommentList)