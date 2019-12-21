import axios from 'axios'
import apis from './apis'
import interceptors from './interceptors'

const ajax = axios.create({
        baseURL: apis.baseURL
    })
    //添加拦截
interceptors(ajax)


export const test = () => {
    return ajax.get(apis.test)
}

export const signIn = (user) => {
    return ajax.post(apis.signIn, {...user })
}

export const signUp = (user) => {
    return ajax.post(apis.signUp, {...user })
}