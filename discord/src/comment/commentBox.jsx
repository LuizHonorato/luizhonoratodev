import React from 'react'
import PropTypes from 'prop-types'

const CommentBox = ({comment, remove}) => {
    return (
        <div className='row valign-wrapper'>
            <div className='col s11'>
                <p className='comment'>{comment.post}</p>
            </div>
            <div className='col s1'>
                <a onClick={() => remove(comment.id)} className="btn-floating waves-effect waves-light red"><i className="material-icons">close</i></a>
            </div>  
        </div>
    )
}

CommentBox.propTypes = {
    remove: PropTypes.func
}

export default CommentBox