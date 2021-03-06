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




new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')