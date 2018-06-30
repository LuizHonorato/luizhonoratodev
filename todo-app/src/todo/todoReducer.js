import update from 'immutability-helper'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'TASK_ADDED':
            return [
                ...state,
                    {
                        id: action.id,
                        description: action.text,
                        done: false
                    }
                ]
        case 'MARKED_AS_DONE':
            return update(state, {
                [action.id]: {
                    done: {$set: true}
                }
            })
        case 'MARKED_AS_PENDING':
            return update(state, {
                [action.id]: {
                    done: {$set: false}
            }
        })
        case 'TASK_REMOVED':
            return state.filter((item, id) => id !== action.id )
        default:
            return state
    }
}

export default todos