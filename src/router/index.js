import Vue from 'vue'
import VueRouter from 'vue-router'
import Mall from '../views/Mall.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/mall',
}, {
    path: '/mall',
    name: 'Mall',
    component: Mall
},
{
    path: '/shelf',
    name: 'Shelf',
    component: () =>
        import('../views/Shelf.vue')
},
{
    path: '/sort',
    name: 'Sort',
    component: () =>
        import('../views/Sort.vue')
},
{
    path: '/mine',
    name: 'Mine',
    component: () =>
        import('../views/Mine.vue')
}, {
    path: '/search',
    name: 'Search',
    component: () =>
        import('../views/Search.vue')
}, {
    path: '/login1',
    name: 'Login1',
    component: () =>
        import('../views/Login1.vue')
},
{
    path: '/login',
    name: 'Login',
    component: () =>
        import('../views/Login.vue')
}, {
    path: '/register',
    name: 'Register',
    component: () =>
        import('../views/Register.vue')
}, {
    path: '/find',
    name: 'find',
    component: () =>
        import('../views/Find.vue')
}, {
    path: '/vip',
    name: 'Vip',
    component: () =>
        import('../views/Vip.vue')
},
{
    path: '/male',
    name: 'Male',
    component: () =>
        import('../views/Male.vue')
}, {
    path: '/female',
    name: 'Female',
    component: () =>
        import('../views/Female.vue')
}, {
    path: '/list/:index',
    name: 'List',
    component: () =>
        import('../views/List.vue')
}, {
    path: '/consume',
    name: 'Consume',
    component: () =>
        import('../views/Consume')
}, {
    path: '/record',
    name: 'Record',
    component: () =>
        import('../views/Record')
}, {
    path: '/bought',
    name: 'Bought',
    component: () =>
        import('../views/Bought')
}, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router