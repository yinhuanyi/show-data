import Mock from 'mockjs'

Mock.mock('http://localhost:8080' + '/screen/wordcloud', {
    status: 0,
    data: {
      username: 'wordcloud'
    },
    msg: ''
})

Mock.mock('http://localhost:8080' + '/screen/data', {
  status: 0,
  // data: {
    username: 'data',
    salesToday: 30390245,
    salesGrowthLastDay: '1.30',
    salesGrowthLastMonth: '30.90',
    salesLastDay: 3000000,
    orderToday: 34928423,
    orderLastDay: 249729847,
    orderTrend: [1032, 240, 124, 390, 149, 267, 243, 154, 255, 249, 1032, 240, 124, 390, 149, 267, 243, 154, 255, 249],
  // },
  msg: ''
})

Mock.mock('http://localhost:8080' + '/screen/map/scatter', {
  status: 0,
  data: {
    username: 'scatter'
  },
  msg: ''
})
