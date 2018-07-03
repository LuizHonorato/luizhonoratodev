import {combineReducers} from 'redux'
import comments from '../comment/commentReducer'

const rootReducer = combineReducers({
    comments
})

export default rootReducer