// user is logged in when there's a token present in state.
export const loggedIn = (state) => {
    return state.token !== null
}