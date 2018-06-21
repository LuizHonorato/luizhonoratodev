const INITIAL_STATE = {description: '', list: [], done: false }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        case 'TASK_ADDED':
            return {...state, list: [...state.list, {id: action.id, description: state.description, done: state.done }]}
        case 'MARKED_AS_DONE':
            return state.list.map(todo => (todo.id === action.id) ? {...todo, done: !todo.done}: todo)
        case 'TODO_SEARCHED':
            return {...state, list: action.payload}
        case 'TODO_CLEAR':
            return {...state, description: ''}
        default:
            return state
    }
}