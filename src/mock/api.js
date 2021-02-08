import Mock from 'mockjs'

Mock.mock('http://localhost:8080' + '/screen/wordcloud', [
  { word: '北京', user: 3, count: 210 },
  { word: '深圳', user: 1, count: 230 },
  { word: '湖南', user: 2, count: 240 },
  { word: '上海', user: 3, count: 250 },
  { word: '武汉', user: 4, count: 220 },
  { word: '四川', user: 5, count: 240 },
  { word: '南京', user: 5, count: 250 },
  { word: '杭州', user: 2, count: 220 },
  { word: '日本', user: 4, count: 240 },
  { word: '韩国', user: 5, count: 250 },
  { word: '菲律宾', user: 3, count: 220 }
])

Mock.mock('http://localhost:8080' + '/screen/data', {
  status: 0,
  username: 'data',
  salesToday: 30390245,
  salesGrowthLastDay: '1.30',
  salesGrowthLastMonth: '30.90',
  salesLastDay: 3000000,
  orderToday: 34928423,
  orderLastDay: 249729847,
  orderTrend: [203, 240, 124, 390, 149, 267, 243, 154, 255, 249, 1032, 240, 124, 390, 149, 267, 243, 154, 255, 249],
  orderUser: 12312312,
  returnRate: '1.23',
  orderUserTrend: [532, 240, 124, 290, 149, 267, 243, 154, 255, 249, 1000],
  orderUserTrendAxis: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00'],
  userToday: 234,
  userLastMonth: 123,
  userGrowthLastDay: 3947539,
  userGrowthLastMonth: 239658,
  orderFullYear: [200, 250, 300, 1050, 200, 250, 300, 350, 200, 250, 300, 350],
  orderFullYearAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  orderRank: [
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
  ],
  userFullYear: [250, 250, 123, 222, 1231, 43, 4345, 23, 200, 250, 300, 350],
  userFullYearAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  userRank: [
    {
      no: 1,
      name: '哈哈哈',
      money: '234,234'
    },
    {
      no: 2,
      name: '哈哈哈',
      money: '234,234'
    },
    {
      no: 3,
      name: '哈哈哈',
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
  ],
  // category.data1
  category: {
    data1: {
      axisX: ['BTC', 'ETH', 'FIL'],
      data1: [78, 78, 67],
      data2: []
    },
    data2: {
      axisX: ['BTC1', 'ETH2', 'FIL3'],
      data1: [38, 23, 43],
      data2: []
    }
  },
  msg: ''
})

Mock.mock('http://localhost:8080' + '/screen/map/scatter', {
  status: 0,
  username: 'scatter',
  msg: ''
})
