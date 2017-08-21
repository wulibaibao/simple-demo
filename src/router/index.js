import Vue from 'vue'
import Router from 'vue-router'
import Code from '../components/Code.vue'
import Slide from '../components/Slide.vue'

Vue.use(Router);
Vue.config.productionTip = false;

export default new Router({
    routes: [{
            path: '/',
            name: 'code',
            component: Code,
        }, {
            path: '/slide',
            name: 'slide',
            components: Slide
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

// children: [{
//     path: '',
//     name: '',
//     component: ''
// }]