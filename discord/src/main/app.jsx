import '../common/template/dependencies'

import React from 'react'
import CommentInput from '../comment/commentInput'
import CommentList from '../comment/commentList'

export default props => (
    <div className='container'>
        <CommentInput />
        <CommentList />
    </div>
)