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
    return ajax.post(apis.signIn, { ...user })
}

export const signUp = (user) => {
    return ajax.post(apis.signUp, { ...user })
}

export const addBuyList = (list) => {
    return ajax.post(apis.addBuyList, list)
}

export const postGoods = (list) => {
    return ajax.post(apis.postGoods, list)
}


export const postFile = (fromData, id) => {
    return ajax.post(apis.postFile + '?id=' + id, fromData)
}
export const deletePic = (id) => {
    return ajax.post(apis.deletePic, id)
}

export const getManageList = (type = "business", page) => {
    return ajax.post(apis.getManageList, { type, index: page })
}

export const getGoodsItem = (id) => {
    return ajax.get(apis.getItem + '?id=' + id)
}
export const getBuyList = () => {
    return ajax.get(apis.getBuyList)
}
export const editBuyList = (body) => {
    return ajax.post(apis.editBuyList, body)
}


export const pay = (list) => {
    return ajax.post(apis.pay, list)
}

//首页
export const getSwiperList = () => {
    return ajax.get(apis.getSwiperList)
}

export const getCateList = () => {
    return ajax.get(apis.getCateList)
}

export const getFloorsList = () => {
    return ajax.get(apis.getFloorsList)
}
//分类
export const getCategories = () => {
    return ajax.get(apis.getCategories)
}
//列表
export const getGoodsList = (query) => {
    return ajax.get(apis.getGoodsList + query)
}

//商品详情
export const getGoodsDetail = (query) => {
    return ajax.get(apis.getGoodsDetail + query)
}




// export const test1 = () => {
//     return ajax.get('/mallshop/test')
// }

// ajax.get('/mallshop/test').then(res => {
//     console.log(res.data) //返回 base64格式

//     // console.log(URL.createObjectURL())
//     let blob = new Blob([res.data], { type: "image/png" })
//     let url = URL.createObjectURL(blob)
//     var img1 = new Image()
//     img1.src = url
//     document.body.append(img1)
// })