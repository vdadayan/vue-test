import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/HomeView'
import Todo from './views/TodosView'
import RequestChain from './views/RequestChainView'
import Validation from './views/ValidationView'
import AccessView from "./views/AccessView";
import AccessReports from "./components/Access/AccessReports";
import AccessHome from "./components/Access/AccessHome";
import AccessSettings from "./components/Access/AccessSettings";
import Access404 from "./components/Access/Access404";
import ErrorPermissions from "./components/ErrorPermissions";

// const permission = 'Admin'


const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: Todo
        },
        {
            path: "/chain",
            component: RequestChain
        },
        {
            path: "/validation",
            component: Validation
        },
        {
            path: "/access",
            component: AccessView,
            children: [
                {
                    path: 'home',
                    component: AccessHome

                },
                {
                    path: 'reports',
                    component: AccessReports,
                    meta: {
                        permission: localStorage.getItem('permissions') === 'Admin'
                    }
                },
                {
                    path: 'settings',
                    component: AccessSettings,
                    meta: {
                        permission: localStorage.getItem('permissions') === 'User'
                    }
                },

            ]
        },
        {
            path: '/:catchAll(.*)',
            component: Access404
        },
        {
            path: '/forbidden',
            component: ErrorPermissions
        },

    ]
})

router.beforeEach((to, from, next) => {
    const {meta} = to
    if (meta.permission) {
        next({
            path: '/forbidden',
            component: ErrorPermissions
        })
    } else {
        next()
    }
})

export default router
