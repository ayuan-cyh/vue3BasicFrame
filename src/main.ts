import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store/index'// 引入pinia
import router from './router/index'// 引入路由
import ElementPlus from "element-plus"
const app = createApp(App);// 实例化app
import 'element-plus/dist/index.css'

setupStore(app)// 挂载pinia

// 挂载路由
createApp(App).use(ElementPlus).use(router).mount('#app')
