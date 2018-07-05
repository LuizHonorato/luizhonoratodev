import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {remove, like, dislike} from './commentActions'
import likeImage from '../common/img/like.png'
import heartImage from '../common/img/heart.png'
import talkImage from '../common/img/speech-bubble.png'
import heartBrokenImage from '../common/img/dislike-empty.png'
import dislikeImage from '../common/img/dislike.png'
 
const CommentList = ({comments, remove, like, dislike}) => {

    return (
        
        <div>
            <h4 className='title-list'>Comentários:</h4>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <div className='row valign-wrapper row-comment'>
                        <div className='col s11'>
                            <p className='comment'>{comment.post}</p>
                        </div>
                        <div className='col s1'>
                            <a onClick={() => remove(comment.id)} className="btn-floating waves-effect waves-light red"><i className="material-icons">close</i></a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col s1'>
                            <a onClick={() => like(comment.id)} className='like-btn'><img src={!comment.like ? likeImage: heartImage}  alt="Curtir"/></a>
                        </div>
                        <div className='col s1'>
                            <a onClick={() => dislike(comment.id)} className='like-btn'><img src={!comment.dislike ? heartBrokenImage : dislikeImage}  alt="Descurtir"/></a>
                        </div>
                        <div className='col s8'>
                            <a className='like-btn modal-trigger' id='resp'><img src={talkImage}  alt="Responder"/></a>
                        </div>
                    </div>
                </div>      
            ))}
        </div>
    )
} 
const mapStateToProps = state => ({comments: state.comments})
const mapDispatchToProps = dispatch => bindActionCreators({remove, like, dislike}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CommentList)