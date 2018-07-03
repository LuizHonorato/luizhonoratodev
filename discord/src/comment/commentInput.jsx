import React from 'react'
import {connect} from 'react-redux'

import {post} from './commentActions'

const AddPost = ({dispatch}) => {
    let textarea
    return (
        <div className='row'>
            <form className='col s12 z-depth-2'
                onSubmit={e => {
                    e.preventDefault()
                    if(!textarea.value.trim()){
                        return
                    }
                    dispatch(post(textarea.value))
                    textarea.value = ''
                }}>
                <div className='row'>
                    <div className='input-field col s12'>
                        <textarea ref={node => textarea = node}  id='commentBox' className='materialize-textarea'></textarea>
                        <label htmlFor='commentBox'>Sua ideia:</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 center-align'>
                        <button className="btn waves-effect waves-light red" type="submit" name="action">Publicar<i className="material-icons right">send</i></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connect()(AddPost)