import types from './types'
export default {
    [types.SET_USER](state, user) {
        state.user = user
    },
    [types.ADD_BUYLIST](state, buylist) {
        state.buyList = buylist
    }
}