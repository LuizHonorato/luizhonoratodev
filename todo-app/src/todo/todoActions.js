export const add = (text) => { return { type: 'TASK_ADDED', text } }

export const markAsDone = (id) => { return { type: 'MARKED_AS_DONE', id } }

export const markAsPending = (id) => { return { type: 'MARKED_AS_PENDING', id } }

export const remove = (id) => { return { type: 'TASK_REMOVED', id } }

export const setVisibilityFilter = filter => ({ type: 'SET_VISIBILITY_FILTER', filter })

export const VisibilityFilters = {
     SHOW_ALL: 'SHOW_ALL',
     SHOW_DONE: 'SHOW_DONE',
     SHOW_PENDING: 'SHOW_PENDING'
 }