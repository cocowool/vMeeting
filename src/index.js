//Import bootstrap style
// import 'bootstrap/dist/css/bootstrap.min.css';

import sass from 'css/main.scss';

import Vue from 'vue'
import Main from './components/Main.vue'
import Home from './components/Home.vue'
import Calendar from './components/Calendar.vue'
import Week from './components/Week.vue'
import Month from './components/Month.vue'

import About from './components/About.vue'
import Meeting from './components/Meeting.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'


var mt_time = ['8:30-9:30', '9:30-10:30', '10:30-11:30', '13:30-14:30', '15:30-16:30', '16:30-17:30'];
var mt_room = ['1308', '1303', '1304', '1305', '1306'];

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
    { path: '/', component: Home },
    { path: '/cal', component: Week }, 
    { path: '/cal/:mode', component: Month },
    { path: '/about', component: About },
    { path: '/meeting/:id', component: Meeting }
    // { path: '*', component: Home }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// var m = require('./meeting')

// console.log("Hello webpack")
// m.sayHello();

const app = new Vue({
    el: '#app',
    template: '<Main/>',
    components: { Main },
    // computed: {
    //     ViewComponent(){
    //         require('./components/Main.vue')
    //     }
    // },
    // render(h) {
    //     // return h(this.ViewComponent)
    //     return h(Main)
    // },
    router
});