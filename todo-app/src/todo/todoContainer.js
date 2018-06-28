import {connect} from 'react-redux'
import TodoList from './todoList'
import {VisibilityFilters, markAsDone, markAsPending} from './todoActions'

const getVisibleTodos = (list, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return list
        case VisibilityFilters.SHOW_DONE:
            return list.filter(t => t.done)
        case VisibilityFilters.SHOW_PENDING:
            return list.filter(t => !t.done)
        default:
            throw new Error('Filtro desconhecido: ' + filter)
    }
}

const mapStateToProps = state => ({list: getVisibleTodos(state.todo.list, state.visibilityFilter)})
const mapDispatchToProps = dispatch => ({markAsDone: index => dispatch(markAsDone(index)), markAsPending: index => dispatch(markAsPending(index)) })

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)