import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/tasks'
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/tasks'
            },
            {
                path: 'tasks',
                name: 'tasks',
                meta: {
                    requiresAuth: true,
                },
                component: () => import('@/views/TasksPage.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.name === 'login' && token) return next({name: 'tasks'})
    if (to.meta.requiresAuth && !token) return next({name: 'login'})
    next()
})

export default router
