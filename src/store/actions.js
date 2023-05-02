export const destroyToken = (context) => {
    if (context.getters.loggedIn) {
        localStorage.removeItem('gtoken')
        context.commit('destroyToken')
    }
}