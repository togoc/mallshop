import jwt from "jwt-decode";
import types from './types'
import * as http from '../http/index'

export const getTest = ({ commit }, arg) => {
    http.test().then(res => {
            console.log(res)
        })
        // commit('', arg)
}


export const signUp = ({ commit }, user) => {
    console.log(user)
    http.signUp(user).then(res => {
            console.log(res)
        })
        // commit('', arg)
}


export const signIn = ({ commit }, user) => {
    http.signIn(user).then(response => {
        let { data, status } = response
        if (status === 200 && data.token) {
            commit(types.SET_USER, jwt(data.token))
        }
    })

}