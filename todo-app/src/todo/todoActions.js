export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED', 
    payload: event.target.value
})

export const add = () => {
    return [{ type: 'TASK_ADDED' }, clear()]
 }

 export const markAsDone = (index) => {
    return { type: 'MARKED_AS_DONE', index }
 }

 export const markAsPending = (index) => {
    return { type: 'MARKED_AS_PENDING', index }
 }

 export const remove = (index) => {
     return {type: 'TODO_REMOVED', index}
 }

 export const clear = () => {
     return { type: 'TODO_CLEAR'}
 }

 export const setVisibilityFilter = filter => ({
     type: 'SET_VISIBILITY_FILTER',
     filter
 })

 export const VisibilityFilters = {
     SHOW_ALL: 'SHOW_ALL',
     SHOW_DONE: 'SHOW_DONE',
     SHOW_PENDING: 'SHOW_PENDING'
 }