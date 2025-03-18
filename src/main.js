import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import * as echarts from 'echarts';

createApp(App).use(echarts).mount('#app')