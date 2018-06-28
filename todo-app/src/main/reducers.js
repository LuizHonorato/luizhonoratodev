import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducer'
import visibilityFilter from '../todo/visibilityFilter'
 
const rootReducer = combineReducers({
    todo: todoReducer,
    visibilityFilter
})

export default rootReducer