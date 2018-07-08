let nextCommentId = 0

export const post = (text, user) => { return { type: 'POST_ADDED', text, user, id: nextCommentId++ } }
export const remove = (id) => { return { type: 'POST_DELETED', id } }
export const like = (id) => { return { type: 'POST_LIKED', id } }
export const dislike = (id) => { return { type: 'POST_DISLIKED', id } }