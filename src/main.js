import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 导入全局样式
import './style/index.scss'
// 导入权限控制模块
import './permission'
// 导入i18n
import i18n from '@/i18n'
import installIcons from '@/icons'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
