import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { constantRoutes } from './routes'

const router = new VueRouter({
    mode: 'history',
    routes:constantRoutes
})

export default router