const initialState = []

export default function comments(state = initialState, action) {
    switch (action.type){
        case 'POST_COMMENTED':
            return [
                ...state,
                    {
                        id: action.id,
                        post: action.text,
                        like: false
                    }
            ]
        case 'POST_DELETED':
            return console.log(action.id), state.filter(comment => comment.id !== action.id)
        default:
            return state
    }
}