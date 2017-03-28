import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'

import { routes } from './routes'
import { store } from './store'

import conf from './conf'

const moment = require('moment/locale/th')

Vue.use(VueResource)
Vue.use(VueMoment, moment)

Vue.http.options.root = 'https://graph.facebook.com/v2.8'

new Vue({
    el: '#app',
    data: {
    },
    methods: {
    },
    store,
    render: h => h(App)
})
