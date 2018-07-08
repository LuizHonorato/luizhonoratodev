import React from 'react'
import {connect} from 'react-redux'

import {post} from './commentActions'

const AddPost = ({dispatch}) => {
    let input
    let user
    return (
        <div className='row'>
            <h1 className='center-align'>Discord aqui...</h1>
            <form className='col s12 center-align'
                onSubmit={e => {
                    e.preventDefault()
                    if(!input.value.trim()){
                        return
                    }
                    dispatch(post(input.value, user.value))
                    user.value = ''
                    input.value = ''
                }}>
                <div className='row'>
                    <div className='input-field col s6'>
                        <input ref={node => user = node} type="text" id='commentBox'/>
                        <label htmlFor='commentBox'>Qual é o seu nome?</label>
                    </div>
                    <div className='input-field col s6'>
                        <input ref={node => input = node} type='text'  id='commentBox' />
                        <label htmlFor='commentBox'>O que você está pensando agora?</label>
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