import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import Login from '../components/user/Login'
// import Home from '../views/Home'
// import Setting from '../components/user/Setting'
// import Store from '../components/store/Store'
// import HomeContainer from '../components/home/Container'
// import BusinessIndex from '../views/BusinessIndex'
// import GoodsDetail from '../views/GoodsDetail'
// import Business from '../components/business/Business'
// import Form from '../views/Form'
// import Add from '../components/business/goodsmanage/Add'
import jwt from "jwt-decode";
Vue.use(VueRouter)



const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: () =>
            import ('../views/Home'),
        children: [{
                path: '',
                component: () =>
                    import ('../components/home/Container')
            },
            {
                path: '/home/goodsdetail/:id',
                component: () =>
                    import ('../views/GoodsDetail')
            },
            {
                path: '/home/store',
                component: () =>
                    import ('../components/store/Store')
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/form',
        component: () =>
            import ('../views/Form')
    },
    {
        path: '/setting',
        component: () =>
            import ('../components/user/Setting')
    }, {
        path: '/business',
        component: () =>
            import ('../views/BusinessIndex'),
        children: [{
                path: '',
                component: () =>
                    import ('../components/business/Business')
            },
            {
                path: '/business/add',
                component: () =>
                    import ('../components/business/goodsmanage/Add')
            }
        ]
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
    let token = localStorage.getItem("mallshoptoken")
    let isLogin = token ? true : false;
    if (to.path === "/login") {
        next()
    } else {
        isLogin ? next() : next("/login")
    }

    try {
        let userType = jwt(token).identity
        if (to.path === '/login') {
            next()
        } else {
            userType === "business" ? (to.path.indexOf('/business') !== -1 ? next() : next("/business")) : (userType !== 'normal' ? next("/login") : (to.path === "/business" ? next("/") : next()))
        }
    } catch (err) {
        next("/login")
    }

})

export default router