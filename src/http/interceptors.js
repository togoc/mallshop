import { Indicator } from "mint-ui";
import { Toast } from "mint-ui";
let times = 0

function start() {
    Indicator.open({
        spinnerType: "snake",
    });
}

function end() {
    Indicator.close()
}

export default (ajax) => {
    ajax.interceptors.request.use(request => {
        start()
        times++
        if (localStorage.mallshoptoken) {
            request.headers.Authorization = localStorage.mallshoptoken
        }
        return request
    }, error => {
        return Promise.reject(error)
    })
    // 400 （错误请求） 服务器不理解请求的语法。
    // 401 （未授权） 请求要求身份验证。 
    // 403 （禁止） 服务器拒绝请求。
    ajax.interceptors.response.use(response => {
        times--
        if (times === 0) end()
        let { data, status } = response
        //拦截返回带message
        if (status === 200 && !Array.isArray(data.message) && data.message) {
            Toast({
                message: data.message,
                position: "top",
                duration: 1500
            });
        }
        //
        if (status === 201 && data.message) {
            start();
            Toast({
                message: data.message,
                position: "top",
                duration: 1500
            });
        }
        // 拦截返回带token
        if (status === 200 && data.token) {
            localStorage.setItem('mallshoptoken', data.token)
            Toast({
                message: '登录成功',
                position: "top",
                duration: 1500
            });
        }
        return response
    }, error => {
        times--
        if (times === 0) end()
        let { data, status } = error.response
        if (status === 401) {
            Toast({
                message: data.message || "身份验证失败,请重新登陆!",
                position: "top",
                duration: 1500
            });
        }
        if (status === 500) {
            Toast({
                message: data.message || '服务器请求错误',
                position: "top",
                duration: 1500
            });
        }
        return Promise.reject(error)
    })

}