import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Modal} from 'react-materialize'
import {remove, like, dislike} from './commentActions'
import likeImage from '../common/img/like.png'
import heartImage from '../common/img/heart.png'
import talkImage from '../common/img/speech-bubble.png'
import heartBrokenImage from '../common/img/dislike-empty.png'
import dislikeImage from '../common/img/dislike.png'

class CommentBox extends Component {

    render() { 
        return (
            <div>
                <div className='row valign-wrapper row-comment'>
                    <div className='col s11'>
                        <p className='comment'>{this.props.post}</p>
                    </div>
                    <div className='col s1'>
                        <a onClick={() => this.props.remove(this.props.id)} className="btn-floating waves-effect waves-light red"><i className="material-icons">close</i></a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s1'>
                        <a onClick={() => this.props.like(this.props.id)} className='like-btn'><img src={!this.props.liked ? likeImage: heartImage}  alt="Curtir"/></a>
                    </div>
                    <div className='col s1'>
                        <a onClick={() => this.props.dislike(this.props.id)} className='like-btn'><img src={!this.props.disliked ? heartBrokenImage : dislikeImage}  alt="Descurtir"/></a>
                    </div>
                    <div className='col s8'>
                        <Modal
                            trigger={ <a className='like-btn modal-trigger' id='resp'><img src={talkImage}  alt="Responder"/></a>}
                            actions={ <a class="btn blue">Responder</a> } >
                            <textarea placeholder='Escreva aqui sua resposta...' className='materialize-textarea'></textarea>
                        </Modal>
                    </div>
                </div>
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({remove, like, dislike}, dispatch)
export default connect(null, mapDispatchToProps)(CommentBox)