import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView/FormView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
