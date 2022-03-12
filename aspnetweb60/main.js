import './sass/main.scss'
import $ from 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

window.jQuery = window.$ = $

console.log("allo")