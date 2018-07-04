import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {remove} from './commentActions'
import CommentBox from '../comment/commentBox'


const mapStateToProps = state => ({
    comment: state.comments
})

const mapDispatchToProps = dispatch => ({remove: id => dispatch(remove(id))})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)