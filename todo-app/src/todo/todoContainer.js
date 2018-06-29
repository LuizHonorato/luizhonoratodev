import {connect} from 'react-redux'
import TodoList from './todoList'
import {VisibilityFilters, markAsDone, markAsPending, remove} from './todoActions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_DONE:
            return todos.filter(t => t.done)
        case VisibilityFilters.SHOW_PENDING:
            return todos.filter(t => !t.done)
        default:
            throw new Error('Filtro desconhecido: ' + filter)
    }
}

const mapStateToProps = state => ({todos: getVisibleTodos(state.todos, state.visibilityFilter)})
const mapDispatchToProps = dispatch => ({markAsDone: index => dispatch(markAsDone(index)), markAsPending: index => dispatch(markAsPending(index)), remove: index => dispatch(remove(index)) })

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)