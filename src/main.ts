import { createApp } from 'vue'
import App from './App.vue'

// 引入pinia
import { setupStore } from './store/index'
// 引入路由
import router from './router'
// 实例化app
const app = createApp(App);

// 挂载pinia
setupStore(app)

// 挂载路由
createApp(App).use(router).mount('#app')
