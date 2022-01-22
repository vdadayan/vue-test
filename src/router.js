import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home'
import Todo from './views/Todos'

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
        }
    ]
})

export default  router
