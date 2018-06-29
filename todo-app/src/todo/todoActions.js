export const add = (text) => {
    return { type: 'TASK_ADDED', text }
 }

 export const markAsDone = (index) => {
    return { type: 'MARKED_AS_DONE', index }
 }

 export const markAsPending = (index) => {
    return { type: 'MARKED_AS_PENDING', index }
 }

 export const remove = (index) => {
    return { type: 'TASK_REMOVED', index }
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