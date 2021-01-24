<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>

import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'
// 导入请求函数
import { wordcloud, screenData, mapScatter } from '@/api'

export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data () {
    return {
      // 定义三个http接口返回的数据
      reportData: null,
      wordcloud: null,
      mapData: null
    }
  },
  // 定义provider需要传递的方法
  methods: {
    getReportData () {
      return this.reportData
    },
    getWordcloud () {
      return this.wordcloud
    },
    getMapData () {
      return this.mapData
    }
  },
  // 在父组件中，使用provide给子组件抛出数据
  provide () {
    return {
      getReportData: this.getReportData,
      getWordcloud: this.getWordcloud,
      getMapData: this.getMapData
    }
  },
  mounted () {
    // 调用请求函数
    screenData().then(data => { this.reportData = data })
    wordcloud().then(data => { this.wordcloud = data })
    mapScatter().then(data => { this.mapData = data })
  }
}
</script>

<style>
  .home {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
