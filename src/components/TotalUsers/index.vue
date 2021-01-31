<template>
  <common-card title="累计销售额" :value="userToday">
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">{{userGrowthLastDay}}</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">{{userGrowthLastMonth}}</span>
        <div class="decrease"></div>
      </div>
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
        // 这里是让X轴显示数值，也就是柱状图倒过来
        xAxis: {
          type: 'value',
          show: false
        },
        // 这里是让Y轴显示类别
        yAxis: {
          show: false,
          type: 'category'
        },
        series: [
          {
            name: '上月平台用户数',
            // 将两个柱状绘制在一起，可以让stack取同样的名字
            stack: '总量',
            type: 'bar',
            // 第一个柱的数值
            data: [this.userLastMonth],
            // 宽度
            barWidth: 10,
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '今日平台用户数',
            // 将两个柱状绘制在一起，可以让stack取同样的名字
            stack: '总量',
            type: 'bar',
            // 第二个柱的数值
            data: [this.userToday],
            barWidth: 10,
            itemStyle: {
              color: 'green'
            }
          },
          {
            // 这个图形是自定义系列
            type: 'custom',
            // 让箭头的数值与第一个柱保持一致
            data: [this.userLastMonth],
            stack: '总量',
            // 返回图形
            renderItem: (params, api) => {
              // 获取data数组中的第一个元素
              const value = api.value(0)
              // 获取到X轴的位置
              const endPoint = api.coord([value, 0])
              // 把图返回
              return {
                type: 'group',
                position: endPoint,
                // children属性可以绘制多个图形在一起
                children: [
                  {
                    type: 'path',
                    shape: {
                      // svg的data路径
                      d: 'M171.15136 341.00224l684.02176 0-342.016 341.99552L171.15136 341.00224z',
                      // 图标的坐标位置
                      x: -5,
                      y: -15,
                      // 图标的宽高
                      width: 10,
                      height: 10,
                      // 让图形自动填充
                      layout: 'cover'
                    },
                    // 设置图标的样式
                    style: {
                      fill: 'red'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M830.687738 603.071182c0 9.614985-3.933589 17.949814-11.799744 25.007557-7.867178 7.05672-17.222243 10.56052-28.065196 10.512425L232.716714 638.591163c-10.789741 0-20.144806-3.5038-28.064172-10.512425-7.919367-7.009647-11.852956-15.344476-11.799744-25.007557 0.053212-9.660011 3.986801-17.996886 11.799744-25.00551l279.05253-248.641917c7.867178-7.009647 17.22122-10.513448 28.065196-10.513448 10.842952 0 20.196994 3.504824 28.064172 10.513448l279.05253 248.641917C826.754149 585.074296 830.687738 593.411171 830.687738 603.071182z',
                      x: -5,
                      y: 5,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: 'red'
                    }
                  }
                ]
              }
            }
          }
        ],
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
  .total-users-footer {
    display: flex;
    align-items: center;
    .month {
      margin-left: 10px;
    }
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
