export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = (description) => {
   return { type: 'TODO_SEARCHED', 
            payload: description }
}

export const add = (description) => {
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