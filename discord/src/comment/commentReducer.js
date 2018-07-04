const initialState = []

export default function comments(state = initialState, action) {
    switch (action.type){
        case 'POST_COMMENTED':
            return [
                ...state,
                    {
                        id: action.id,
                        post: action.text,
                        like: false,
                        dislike: false
                    }
            ]
        case 'POST_DELETED':
            return state.filter(comment => comment.id !== action.id)
        case 'POST_LIKED':
            return state.map(comment =>
                (comment.id === action.id)
                 ? {...comment, like: !comment.like}
                 : comment)
        case 'POST_DISLIKED':
            return state.map(comment =>
                (comment.id === action.id)
                ? {...comment, dislike: !comment.dislike}
                : comment)
        default:
            return state
    }
}