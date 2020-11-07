import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactList from '../components/contactList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList,
  },
  {
    path: '/contact/',
    name: 'Contact',
    props : true, // params as props
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(
        /* webpackChunkName: "contactView.vue" */
        '../components/contactView'
    )

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
