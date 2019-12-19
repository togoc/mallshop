import axios from 'axios'
import apis from './apis'
console.log(apis)

const ajax = axios.create({
    baseURL: ""
})

export const test = () => {
    return ajax.get(apis.test)
}