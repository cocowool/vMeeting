import Vue from 'vue'
import Main from './components/Main.vue'
import Home from './components/Home.vue'
import Calendar from './components/Calendar.vue'
import About from './components/About.vue'
import VueRouter from 'vue-router'

//Import bootstrap style
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Home },
    { path: '/cal', component: Calendar }, 
    { path: '/about', component: About }
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