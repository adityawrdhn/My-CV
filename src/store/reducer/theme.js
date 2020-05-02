const initialState = ''
export const theme = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return action.payload
        default:
            return state
    }
}
