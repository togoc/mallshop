import { Indicator } from "mint-ui";
import { Toast } from "mint-ui";

function start() {
    Indicator.open({
        spinnerType: "fading-circle",
    });
}

function end() {
    Indicator.close()
}

export default (ajax) => {
    ajax.interceptors.request.use(request => {
            start()
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
        end()
        let { data, status } = response
        //拦截返回带message
        if (status === 200 && data.message) {
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
        end()
        let { data, status } = error.response
        if (status === 401) {
            Toast({
                message: data.message,
                position: "top",
                duration: 1500
            });
        }
        return Promise.reject(error)
    })

}