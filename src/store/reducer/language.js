export const language = (state = 'id', action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return action.payload
        default:
            return state
    }
}
