import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
Vue.use(Vuex)
console.log(actions)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})