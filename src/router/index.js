import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import Login from '../components/user/Login'
import Setting from '../components/user/Setting'
import Store from '../components/store/Store'
import HomeContainer from '../components/home/Container'
import Business from '../views/Business'
import Form from '../views/Form'
Vue.use(VueRouter)



const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        children: [
            { path: '', component: HomeContainer },
            { path: '/home/store', component: Store }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/form',
        component: Form
    },
    {
        path: '/setting',
        component: Setting
    }, {
        path: '/business',
        component: Business
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let isLogin = localStorage.getItem("mallshoptoken") ? true : false;
    if (to.path === "/login") {
        next()
    } else {
        isLogin ? next() : next("/login")
    }
})

export default router