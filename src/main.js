import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})