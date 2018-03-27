import Vue from 'vue'
// sweetAlert
import alert from 'sweetalert'
// 引入axios
import axios from 'axios'
// 配置axios方法到全局
Vue.prototype.$api = axios
// 设置axiosbaseURL
axios.defaults.baseURL = 'api/v1'

Vue.prototype.$alert = alert
