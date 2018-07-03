const initialState = []

export default function comments(state = initialState, action) {
    switch (action.type){
        case 'POST_COMMENTED':
            return [
                ...state,
                    {
                        id: state.reduce((maxId, comment) => Math.max(comment.id, maxId), -1) + 1,
                        post: action.text,
                        like: false
                    }
            ]
        default:
            return state
    }
}