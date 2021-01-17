<template>
  <common-card title="累计订单量" value="278424">
    <template>
      <!--   1：使用v-chart标签，基于getOptions()方法返回的数据，渲染图表   -->
      <v-chart :options="getOptions()"/>
    </template>
    <template v-slot:footer>
      <span style="width:100%;height:100%">昨日订单量</span>
      <span class="emphasis">$ 349</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  methods: {
    // 定义一个getOptions()方法，返回图表的options配置参数
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [532, 240, 124, 290, 149, 267, 243, 154, 255, 249],
          areaStyle: {
            color: 'purple'
          },
          smooth: true,
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          }
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
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
