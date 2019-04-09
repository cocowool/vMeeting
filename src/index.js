import Vue from 'vue'

console.log("Hello webpack")

const app = new Vue({
    el: '#app',
    computed: {
        ViewComponent(){
            require('./components/Main.vue')
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
});