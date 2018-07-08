const initialState = []

export default function comments(state = initialState, action) {
    switch (action.type){
        case 'POST_ADDED':
            return [
                ...state,
                    {
                        id: action.id,
                        user: action.user,
                        post: action.text,
                        liked: false,
                        disliked: false,
        
                    }
            ]
        case 'POST_DELETED':
            return state.filter(comment => comment.id !== action.id)
        case 'POST_LIKED':
            return state.map(comment =>
                (comment.id === action.id)
                 ? {...comment, liked: !comment.liked}
                 : comment)
        case 'POST_DISLIKED':
            return state.map(comment =>
                (comment.id === action.id)
                ? {...comment, disliked: !comment.disliked}
                : comment)
        default:
            return state
    }
}