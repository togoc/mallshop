import types from './types'
import * as http from '../http/index'

export const getTest = ({ commit }, arg) => {
    http.test().then(res=>{
        console.log(res)
    })
        // commit('', arg)
}