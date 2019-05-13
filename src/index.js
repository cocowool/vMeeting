import Vue from 'vue'
import Main from './components/Main.vue'
import Calendar from './components/Calendar.vue'
import About from './components/About.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    { path: '/cal', component: Calendar }, 
    { path: '/ablout', component: About }
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
    components: { Main, Calendar, About },
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