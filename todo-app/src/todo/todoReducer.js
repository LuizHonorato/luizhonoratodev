import update from 'immutability-helper'

const initialState = [
    {
        description: 'Estudar React e Redux!',
        done: false,
        id: 0
    }
]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case 'TASK_ADDED':
            return [
                ...state,
                    {
                        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
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
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}