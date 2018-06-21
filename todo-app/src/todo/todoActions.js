let nextTodoId = 0

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    
}

export const add = (description) => {
    return { type: 'TASK_ADDED', id: nextTodoId++, description }
 }

 export const markAsDone = (id) => {
    return { type: 'MARKED_AS_DONE', id }
 }

 export const markAsPending = (todo) => {
     
 }

 export const remove = (todo) => {
     
 }

 export const clear = () => {
     return { type: 'TODO_CLEAR'}
 }