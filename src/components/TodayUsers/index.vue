<template>
  <common-card  title="今日交易用户数" :value="orderUser">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>订单成功率</span>
      <span class="emphasis">{{returnRate}}</span>
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
    getOptions () {
      return {
        tooltip: {},
        title: {
          text: '交易用户',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 0,
          bottom: -5
        },
        color: ['green'],
        xAxis: {
          show: false,
          data: this.orderUserTrendAxis
        },
        yAxis: {
          show: false
        },
        series: [{
          // 类型是折线图
          name: '实时交易量',
          type: 'bar',
          // 指定数据，这里可以使用dataset替换 this.orderUserTrend,
          data: this.orderUserTrend,
          barWidth: '60%'
        }],
        // 设置图表在div中的绝对定位
        grid: {
          top: 0,
          bottom: 20,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
