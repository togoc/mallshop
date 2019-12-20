import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Shop from '../views/Shop'
import NotFound from '../views/NotFound'
Vue.use(VueRouter)



const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/home',
    }, {
        path: '*',
        redirect: '/',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router