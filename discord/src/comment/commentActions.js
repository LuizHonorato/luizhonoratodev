let nextCommentId = 0
export const post = (text) => { return { type: 'POST_COMMENTED', text, id: nextCommentId++ } }
export const remove = (id) => { return { type: 'POST_DELETED', id } }