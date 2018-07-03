import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import CommentBox from '../comment/commentBox'

const mapStateToProps = state => ({
    comment: state.comments
})

const CommentBoxContainer = connect(mapStateToProps, null)(CommentBoxContainer)
export default CommentBoxContainer