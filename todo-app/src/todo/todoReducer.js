import update from 'immutability-helper'
const _ = require('lodash')

const list = []

const INITIAL_STATE = {description: '', list}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        case 'TASK_ADDED':
            return {...state, list: [...state.list, {description: state.description, done: false }]}
        case 'MARKED_AS_DONE':
            return update(state, {
                list: {
                    [action.index]: {
                        done: {$set: true}
                    }
                }
            })
        case 'MARKED_AS_PENDING':
            return update(state, {
                list: {
                    [action.index]: {
                        done: {$set: false}
                    }
                }
            })
        case 'TODO_SEARCHED':
            const searchList = _.filter(state.list, (o) => _.toLower(o.description).includes(_.toLower(action.payload)))
            console.log(searchList)
            return {...state, searchList}
        case 'TODO_REMOVED':
            return {...state, list: [...state.list.slice(0, action.index), ...state.list.slice(action.index + 1)]}
        case 'TODO_CLEAR':
            return {...state, description: ''}
        default:
            return state
    }
}