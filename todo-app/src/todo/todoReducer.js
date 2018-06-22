import update from 'react-addons-update'

const INITIAL_STATE = {id: 0, description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        case 'TASK_ADDED':
            return {...state, list: [...state.list, {id: state.id++, description: state.description, done: false }]}
        case 'MARKED_AS_DONE':
            return update(state, {
                list: {
                    [action.id]: {
                        done: {$set: true}
                    }
                }
            })
        case 'MARKED_AS_PENDING':
            return update(state, {
                list: {
                    [action.id]: {
                        done: {$set: false}
                    }
                }
            })
        case 'TODO_SEARCHED':
            return {...state, list: action.payload}
        case 'TODO_CLEAR':
            return {...state, description: ''}
        default:
            return state
    }
}