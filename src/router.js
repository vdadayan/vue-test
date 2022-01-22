import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/HomeView'
import Todo from './views/TodosView'
import RequestChain from './views/RequestChainView'
import Validation from './views/ValidationView'

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
        }
    ]
})

export default  router
