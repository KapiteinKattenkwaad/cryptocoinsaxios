import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Secure from './components/Secure'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
      {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated === false) {
          next("/login")
        } else {
          next()
        }
}
    }

  ]

})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
