import update from 'immutability-helper'

const todos = (state = [], action) => {
    switch (action.type) {
        case 'TASK_ADDED':
            return [
                ...state,
                    {
                        description: action.text,
                        done: false
                    }
                ]
                //toastr.error('A descrição da tarega não pode estar fazia, preencha-a por favor.', 'Atenção!')
        case 'MARKED_AS_DONE':
            return update(state, {
                [action.index]: {
                    done: {$set: true}
                }
            })
        case 'MARKED_AS_PENDING':
            return update(state, {
                [action.index]: {
                    done: {$set: false}
            }
        })
        case 'TASK_REMOVED':
            return state.filter((item, index) => index !== action.index )
        default:
            return state
    }
}

export default todos