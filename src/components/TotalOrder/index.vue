<template>
  <common-card title="累计订单量" :value="orderToday">
    <template>
      <!--   1：使用v-chart标签，基于getOptions()方法返回的数据，渲染图表   -->
      <v-chart :options="getOptions()"/>
    </template>
    <template v-slot:footer>
      <span style="width:100%;height:100%">昨日订单量</span>
      <span class="emphasis">{{orderLastDay}}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
// 引入mixin
import commonDataMixin from '@/mixins/commonDataMixin'

export default {
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    // 定义一个getOptions()方法，返回图表的options配置参数
    getOptions () {
      // 判断一下，orderTrend数组>0，才返回结果, 否则直接返回null
      // 下面是一个三元运算符
      return this.orderTrend.length > 0
       ? {
        tooltip: {},
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '累计订单量',
          type: 'line',
          data: this.orderTrend,
          areaStyle: {
            color: 'rgba(95, 187, 255, .5)'
          },
          smooth: true,
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 1
          }
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      } : null
    }
  }
}
</script>

<style lang="scss" scoped>
  // 设置图表的宽高
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
