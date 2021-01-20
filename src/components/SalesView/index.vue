<template>
  <div class="sales-view">
    <!--  1：创建一个card样式组件  -->
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <!-- 在Card样式组件里面，name为header的slot，可以将Card组件分为两个部分，一个是头部一个内容 -->
      <template v-slot:header>
        <div class="menu-wrapper">
          <!-- ①：左边memu -->
          <!-- 在头部引入Menu组件，且有两个item，mode设置item是水平排列，default-active设置哪个item被选中，
          select回调方法，是当item被点击后，调用指定的onMenuselect方法
           -->
          <!-- activeIndex变量的值一定是字符串 -->
          <el-menu mode="horizontal"
                   :default-active="activeIndex"
                   @select="onMenuselect"
                   class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <!-- ②：中间单选框 -->
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="本年" />
            </el-radio-group>
            <!-- ③：右边单选框, picker-options用于快速显示时间 -->
            <!-- unlink-panel会把两个时间段，选择时间分开选择，不会联动 -->
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              unlink-panels
              :picker-options="pickerOptions"
              class="sales-view-date-picker"
            />
          </div>
        </div>
      </template>
      <!-- 这里是将内容插入到子组件的, 这里要查一下，为什么Card没有slot也可以使用template -->
      <template>
        <div class="sales-view-chart-wrapper">
          <!-- 左边部分是图 -->
          <v-chart :options="chartOption"/>
          <!-- 右边部分是列表 -->
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <!-- 这里的class是动态绑定的，后面是一个数组，且第二个元素还是一个三元运算符
                那么前面三个item的class=list-item-no top-no， 后面的元素class=list-item-no
                如果是动态绑定:style样式，也可以这样使用数组，将样式合并
                 -->
                <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{item.no}}</div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-money">{{item.money}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
   // 之类先将eslint语法检查禁止一下
  /* eslint-disable */
  export default {
    // 2：返回echarts绘图相关的options数据 data
    data () {
      return {
        activeIndex: '1',
        radioSelect: '今日',
        date: null,
        // 这个是设置日期左边有快速选择时间
        pickerOptions: {
          shortcuts: [
            {
              text: '最近一天',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                // 这里是向外发送一个事件
                picker.$emit('pick', [start, end])
              }
            },
            {
              text: '最近一周',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                // 让start时间向前推进7天
                start.setTime(start.getTime() - 1000 * 3600 * 24 * 7)
                // 这里可以开启调试模式，需要打开调试模式才有用
                debugger
                // true表示选择【最近一周】后，依然不会关闭日期面板
                picker.$emit('pick', [start, end], true)
              }
            },
            {
              text: '最近一个月',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                // 让start时间向前推进7天
                start.setTime(start.getTime() - 1000 * 3600 * 24 * 30)
                picker.$emit('pick', [start, end])
              }
            }
          ]
        },
        chartOption: {
          title: {
            text: '年度销售额',
            textStyle: {
              fontSize: 12,
              color: '#666'
            },
            left: 25,
            top: 20,
          },
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
              alighWithLabel: true,
              lineStyle: {
                color: '#999'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              color: '#333'
            }
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                type: 'dotted',
                color: '#eee'
              }
            }
          },
          series: [
            {
              type: 'bar',
              barWidth: '35%',
              data: [200, 250, 300, 350, 200, 250, 300, 350, 200, 250, 300, 350, ]
            }
          ],
          color: ['#339874'],
          grid: {
            top: 70,
            left: 60,
            right: 60,
            bottom: 50
          }
        },
        rankData: [
          {
            no: 1,
            name: '麦当劳',
            money: '234,234'
          },
          {
            no: 2,
            name: '麦当劳',
            money: '234,234'
          },
          {
            no: 3,
            name: '麦当劳',
            money: '234,234'
          },
          {
            no: 4,
            name: '麦当劳',
            money: '234,234'
          },
          {
            no: 5,
            name: '麦当劳',
            money: '234,234'
          },
          {
            no: 6,
            name: '麦当劳',
            money: '234,234'
          },
          {
            no: 7,
            name: '麦当劳',
            money: '234,234'
          }
        ]
      }
    },
    methods: {
      // 当item被选中的时候，会传递一个item的index，让这个被选中的item变为active
      onMenuselect (index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
   // 1：任何有echarts绘图的地方需要加上这个
  .echarts {
    width: 100%;
    height: 100%;
  }
   // 2：这个样式控制整个View
  .sales-view {
    margin-top: 20px;
    .menu-wrapper {
      // relative是相对自己之前的位置进行偏移
      position: relative;
      display: flex;
      // 这里可以让下划线为100%
      .sales-view-menu {
        width: 100%;
        padding-left: 20px;
        //
        .el-menu-item {
          height: 50px;
          line-height: 50px;
          margin: 0 20px;
        }
      }
      .menu-right {
        position: absolute;
        top: 0;
        right: 20px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .sales-view-date-picker {
          margin-left: 20px;
        }
      }
    }
  }
  // 3：这个样式控制View中的头部
  .menu-wrapper {
    display: flex;
  }
  // 4：内容部分
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    // 左边图表
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    // 右边列表
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;

      // 标题样式
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666666;
        font-weight: 500;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;

          // 不是前3的列表
          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;

            // 前3的列表
            &.top-no {
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }

    }
  }
</style>
