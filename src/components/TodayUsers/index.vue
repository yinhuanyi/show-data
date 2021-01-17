<template>
  <common-card  title="今日交易用户数" value="7,346">
    <template>
      <v-chart :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>订单成功率</span>
      <span class="emphasis">78%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],
  methods: {
    getOptions () {
      return {
        color: ['green'],
        xAxis: {
          show: false,
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00']
        },
        yAxis: {
          show: false
        },
        series: [{
          // 类型是折线图
          type: 'bar',
          // 指定数据，这里可以使用dataset替换
          data: [532, 240, 124, 290, 149, 267, 243, 154, 255, 249],
          barWidth: '60%'
        }],
        // 设置图表在div中的绝对定位
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
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
