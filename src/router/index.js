import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '@/views/BMap'

// 将VueRouter绑定到Vue中
Vue.use(VueRouter)

// 这里是路由的规则
const routes = [
  {
    // 路由路径
    path: '/',
    // 路由名称
    name: 'Home',
    // 路由到哪个组件
    component: Home
  },
  {
    // 路由路径
    path: '/bmap',
    // 路由名称
    name: 'BMap',
    // 路由到哪个组件
    component: BMap
  }
]

// 基于VueRouter组件和routes规则创建一个router实例
const router = new VueRouter({
  routes
})

// 暴露实例
export default router
