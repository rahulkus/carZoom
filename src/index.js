import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
require('vue-swipe/dist/vue-swipe.css')
require('./assets/app.css')
Vue.use(VueResource)
Vue.use(VueRouter)
import auth from './auth'

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

const { Swipe, SwipeItem } = require('vue-swipe')

Vue.component('nav-component', require('./components/nav.vue'))
Vue.component('footer-component', require('./components/footer.vue'))
Vue.component('swipe', Swipe)
Vue.component('swipe-item', SwipeItem)

// Check the user's auth status when the app starts
auth.checkAuth()

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  'secretquote': {
    component: SecretQuote
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: Signup
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')

