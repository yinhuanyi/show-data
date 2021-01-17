<template>
  <div class="home">
    <!-- 在vue的语法中，引用组件，需要将驼峰的组件名改为小写，且用横线连接 -->
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>

// 导入组件
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'

export default {
  name: 'Home',
  // 加入到Home.vue的子组件中，如果不给子组件取名字，那么默认的名字就是<top-view />
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  }
}
</script>

<style>
  /* 这里的样式会作用到template中 */
  .home {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
