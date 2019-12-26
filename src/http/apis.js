let baseURL = null
process.env.NODE_ENV ? baseURL = '/api' : baseURL = ''
console.log(process.env.NODE_ENV)
export default {
    baseURL: "/api",
    test: '/test',
    signIn: '/login',
    signUp: '/register',
    addBuyList: '/mallshop/addbuylist',
    postFile: '/mallshop/postfile',
    postGoods: '/mallshop/addgoods',
    getManageList: '/mallshop/manageList',
    deletePic: '/mallshop/deletePic',
}