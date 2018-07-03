import '../common/template/dependencies'

import React from 'react'
import CommentHeader from '../comment/commentHeader'
import CommentInput from '../comment/commentInput'
import CommentList from '../comment/commentList'

export default props => (
    <div className='container'>
        <CommentHeader />
        <CommentInput />
        <CommentList />
    </div>
)