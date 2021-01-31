<template>
  <div class="bottom-view">
    <!--  左边的关键词搜索  -->
    <div class="view">
      <el-card shadow="hover">
        <!-- 头部 -->
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <!-- 内容 -->
        <template>
          <div class="chart-wrapper">
            <!-- 第一个部分是显示两张图片 -->
            <div class="chart-inner">
              <!-- 第一张图片 -->
              <div class="chart">
                <!-- 图片的标题 -->
                <div class="chart-title">搜索用户数</div>
                <!-- 图片的数据 -->
                <div class="chart-data">{{userCount | format}}</div>
                <!-- 图片 -->
                <v-chart :options="searchUserOption"/>
              </div>
              <!-- 第二张图片 -->
              <div class="chart">
                <!-- 图片的标题 -->
                <div class="chart-title">搜索量</div>
                <!-- 图片的数据 -->
                <div class="chart-data">{{searchCount | format}}</div>
                <!-- 图片 -->
                <v-chart :options="searchUserOption"/>
              </div>
            </div>
            <!-- 第二个部分是显示表格数据 -->
            <div class="table-wrapper">
              <!-- 定义一个表格 -->
              <el-table :data="tableData">
                <!-- 定义表格中的列 -->
                <el-table-column prop="rank" label="排名" width="180" />
                <el-table-column prop="keyword" label="关键词" width="180" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="总搜用户数" />
                <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <!-- 定义分页 -->
              <el-pagination
                layout="sizes, prev, pager, next"
                :total="total"
                :page-size="pageSize"
                :page-sizes="[2, 4, 6, 8]"
                background
                @current-change="onPageChange"
                @size-change="handleSizeChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <!--  右边的销售排行  -->
    <div class="view">
      <el-card shadow="hover">
        <!-- 这是卡片的header部分 -->
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <!-- 这是卡片的内容部分 -->
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions"/>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
  import commonDataMixin from '@/mixins/commonDataMixin'
  export default {
    mixins: [commonDataMixin],
    data () {
      return {
        searchUserOption: {},
        searchNumberOption: {},
        radioSelect: '品类',
        categoryOptions: {},
        /* TODO: 下面是表格相关的数据，这里的分页存在问题，因为是在前端做的分页，分页应该是后台做，这里请求的数据是全量数据 */
        // 表格的数据源
        tableData: [],
        // 数据总数
        total: 0,
        // 默认的页面数据条数
        pageSize: 4,
        // 默认的当前页面
        currentPage: 1,
        /* 两个折线图的数值 */
        userCount: 0,
        searchCount: 0
      }
    },
    methods: {
      onPageChange (page) {
        this.currentPage = page
        this.renderTable(this.currentPage)
      },
      handleSizeChange (val) {
        this.pageSize = val
        this.renderTable(this.currentPage)
      },
      randerPieChar () {
        const mockData = [
          {
            legendname: 'BTC',
            value: 78,
            percent: '30.23%',
            name: 'BTC | 30.23%'
          },
          {
            legendname: 'ETH',
            value: 67,
            percent: '22.53%',
            name: 'ETH | 22.53%'
          },
          {
            legendname: 'Fil',
            value: 33,
            percent: '18.26%',
            name: 'Fil | 18.26%',
            // 修改样式
            itemStyle: {
              color: 'red'
            }
          }
        ]
        this.categoryOptions = {
          // 定义标题
          title: [
            {
              text: '品类分布',
              textStyle: {
                fontSize: 14,
                color: '#666'
              },
              left: 20,
              top: 20
            },
            {
              text: '累计订单量',
              subtext: '320',
              // 指定标题的位置
              x: '34.5%',
              y: '42.5%',
              // 让文本居中在饼图居中
              textAlign: 'center',
              textStyle: {
                fontSize: 14,
                color: '#999'
              },
              subtextStyle: {
                fontSize: 28,
                color: '#333'
              }
            }
          ],
          // 饼图
          series: [{
            type: 'pie',
            data: mockData,
            label: {
              normal: {
                show: true,
                // label的显示位置
                position: 'outer',
                formatter: function (params) {
                  // console.log(params)
                  return params.data.legendname
                }
              }
            },
            // 调整饼图的位置
            center: ['35%', '50%'],
            // 45%是内半径，60%是外半径，
            radius: ['45%', '60%'],
            labelline: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true
              }
            },
            // 排列顺序，顺时针
            clockwise: true,
            // 加个饼图每段的边距
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }],
          // 指定图例，图例是显示每个数据name中的值, 这里是调整整个图例的样式
          legend: {
            type: 'scroll',
            orient: 'vertical',
            // 可以显示5个legend
            height: 250,
            left: '70%',
            top: 'middle',
            textStyle: {
              color: '#666'
            }
          },
          // 让鼠标放上去，显示数据
          tooltip: {
            // 放在饼图就会触发
            trigger: 'item',
            formatter: function (params) {
              const str = params.marker + params.data.legendname + '<br />' +
                '数量：' + params.data.value + '<br />' + '占比：' + params.data.percent
              return str
            }
          }
        }
      },
      // 修改返回的表格数据的条数
      renderTable (page) {
        // 分页的目的就是将数据截断，slice是切割列表的起始位置和结束位置
        this.tableData = this.totalData.slice(
          (page - 1) * this.pageSize,
          (page - 1) * this.pageSize + this.pageSize
        )
      },
      renderLineChart () {
        // 创建一个函数
        const createOption = (key) => {
          // 定义series的数据
          const data = []
          // 定义x轴的类别
          const axis = []
          // 给series数据赋值
          this.wordCloud.forEach(item => data.push(item[key]))
          // 给x轴类别赋值
          this.wordCloud.forEach(item => axis.push(item.word))
          return {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: axis
            },
            yAxis: {
              show: false,
              min: 0
              // 在实际开发过程中，需要将这个值设置为动态的
              // max: 1000
            },
            series: [
              {
                type: 'line',
                data,
                areaStyle: {
                  color: 'rgba(95, 187, 255, .5)'
                },
                lineStyle: {
                  color: 'rgb(95, 187, 225)'
                },
                itemStyle: {
                  // 让折线图的点点隐藏
                  opacity: 0
                },
                smooth: true
              }
            ],
            grid: {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }
          }
        }
        this.searchUserOption = createOption('user')
        this.searchNumberOption = createOption('count')
      }
    },
    // 在组件挂载后调用
    mounted () {
      this.randerPieChar()
    },
    watch: {
      // 监听wordCloud属性
      wordCloud () {
        const totalData = []
        this.wordCloud.forEach((item, index) => {
          totalData.push({
            id: index + 1,
            rank: index + 1,
            keyword: item.word,
            count: item.count,
            users: item.user,
            // 反引号是模板字符串
            range: `${((item.user / item.count) * 100).toFixed(2)}%`
          })
        })
        // 获取所有字段数据
        this.totalData = totalData
        // 获取数据总条数据
        this.total = this.totalData.length
        // 渲染表格，这里其实就是修改表格数据的条数
        this.renderTable(this.currentPage)
        /* 下面是计算搜索用户数和搜索量 */
        // reduce方法需要传递两个参数，第一个参数是函数，第二个参数是s的初始值
        // 使用第一种方式千分位Number数据，这个format方法是封装在commonDataMixin中的方法
        // this.userCount = this.format(totalData.reduce((s, i) => i.users + s, 0))
        // this.searchCount = this.format(totalData.reduce((s, i) => i.count + s, 0))
        // 使用第二种方式使用format，那么这里不动，在template中完成数据的format
        this.userCount = totalData.reduce((s, i) => i.users + s, 0)
        this.searchCount = totalData.reduce((s, i) => i.count + s, 0)
        this.renderLineChart()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
  .bottom-view {
    display: flex;
    // 这里使得不同的View之间有一个空格
    margin-top: 20px;
    .view {
      // flex:1 表示沾满整个item的空间
      flex: 1;
      width: 50%;
      box-sizing: border-box;
      // 选择器选择的是【关键词搜索部分】
      &:first-child {
        // 右边给个padding
        padding: 0 10px 0 0;
      }
      // 选择器选择的是【销售排行】
      &:last-child {
        // 左边给个padding
        padding: 0 0 0 10px;
      }
      // title的样式
      .title-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        // border-box 如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;
        // 调两个radio的样式
        .radio-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }
      // 图和表格的样式
      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;
        .chart-inner {
          display: flex;
          padding: 0 10px;
          margin-top: 20px;
          .chart {
            flex: 1;
            padding: 0 10px;
            .chart-title {
              color: #999;
              font-size: 14px;
            }
            .chart-data {
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }
            .echarts {
              height: 50px;
            }
          }
        }
        .table-wrapper {
          flex: 1;
          margin-top: 20px;
          padding: 0 20px 20px;
          .el-pagination {
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>
