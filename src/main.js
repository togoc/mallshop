import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jwt from "jwt-decode";
import moment from 'moment'
import * as http from './http'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$moment = moment
Vue.prototype.$jwt = jwt

// let div = document.createElement('div')
// let img = document.createElement('img')
// div.className = 'pic'
// img.className = 'pic_item'
// img.src = 'http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000601419061_1_400x400.jpg'
// div.append(img)
// document.body.append(div)
// div.onclick = () => {
//     div.style.display = 'none'
//     document.body.removeChild(div)
// }



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')