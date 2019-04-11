import Vue from 'vue'
import Main from './components/Main.vue'
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
    }
});