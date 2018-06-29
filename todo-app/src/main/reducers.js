import {combineReducers} from 'redux'
import todos from '../todo/todoReducer'
import visibilityFilter from '../todo/visibilityFilter'
 
const rootReducer = combineReducers({
    todos,
    visibilityFilter
})

export default rootReducer