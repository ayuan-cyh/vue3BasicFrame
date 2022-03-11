import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: Home,
        children: [
            {
                path: '/about',
                name: "About",
                component: () => import("../views/about.vue")
            },
            {
                path: "/home",
                name: 'Home',
                component: () => import("../views/index.vue")
            }
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
