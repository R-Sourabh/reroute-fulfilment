import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/Login.vue'
import Home from "@/views/Home.vue"
import Settings from "@/views/Settings.vue"
import store from '@/store'

const authGuard = (to: any, from: any, next: any) => {
  if (store.getters['user/isAuthenticated']) {
    next()
  } else {
    next("/login")
  }
};

const loginGuard = (to: any, from: any, next: any) => {
  if (!store.getters['user/isAuthenticated']) {
    next()
  } else {
    next("/")
  }
};

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: "/order/:orderId",
  // },
  {
    path: '/',
    // path: "/order/:orderId",
    name: "Home",
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: loginGuard
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    beforeEnter: authGuard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router