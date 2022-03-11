import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/about',
                name: "About",
                component: () => import("../views/about.vue")
            }
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
