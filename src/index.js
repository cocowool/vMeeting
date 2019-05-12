import Vue from 'vue'
import Main from './components/Main.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = []

const router = new VueRouter({
    routes,
    mode: 'history'
})

var m = require('./meeting')

console.log("Hello webpack")
m.sayHello();

const app = new Vue({
    el: '#app',
    computed: {
        ViewComponent(){
            require('./components/Main.vue')
        }
    },
    render(h) {
        // return h(this.ViewComponent)
        return h(Main)
    },
    router
});