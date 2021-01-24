// 对value进行格式化, 千分位
function format (v) {
  // 第一个方式：可以先将v转变为数值类型后，调用toLocaleString方法
  return Number(v).toLocaleString()
  // // 第二个方式：使用正则表达式, g表示全局配置
  // const reg = /\d{1,3}(?=(\d{3})+$)/g
  // // 这里`${v}`是将数值转变为字符串，replace是字符串的方法，reg是正则表达式，'$&,'是替换的对象
  // return `${v}`.replace(reg, '$&,')
}
// 对数值的千分位进行切割
function wrapperNumber (o, k) {
  // 如果o这个object有k那么就返回，否则返回0
  return o && o[k] ? format(o[k]) : 0
}

// 封装百分数
function wrapperPercentage (o, k) {
  // `${o[k]}%` 这里是给o[k]这个数值加上%号，因为需要引用o[k]的值，所以使用反引号，将数值转变为String类型
  return o && o[k] ? `${o[k]}%` : '0%'
}

// 封装数组
function wrapperArray (o, k) {
  return o && o[k] ? o[k] : []
}

export default {
  computed: {
    // 第一个接口返回的数据
    reportData () {
      // 调用this.getReportData()函数的时候，无法获取数据，返回null
      // 但是在显示的时候又有数据了
      console.log('这里好像没有数据: ' + this.getReportData())
      return this.getReportData()
    },
    // 获取reportData计算属性中的数据
    salesToday () {
      return wrapperNumber(this.reportData, 'salesToday')
    },
    // 返回百分数
    salesGrowthLastDay () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    // 返回百分数
    salesGrowthLastMonth () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    // 返回格式化数值
    salesLastDay () {
      return wrapperNumber(this.reportData, 'salesLastDay')
    },
    // 返回格式化数值
    orderToday () {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay () {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend () {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    // 第二个接口返回的数据
    getWordcloud () {
      return this.getWordcloud()
    },
    // 第三个接口返回的数据
    getMapData () {
      return this.getMapData()
    }
  },
  inject: ['getReportData', 'getWordcloud', 'getMapData']
}
