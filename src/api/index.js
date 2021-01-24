import request from '@/utils/request'

// 导出wordcloud
export function wordcloud () {
  // 这里返回是一个promise对象
  return request({
    url: '/screen/wordcloud',
    method: 'get'
  })
}

// 导出wordcloud
export function mapScatter () {
  // 这里返回是一个promise对象
  return request({
    url: '/screen/map/scatter',
    method: 'get'
  })
}

//
export function screenData () {
  // 这里返回是一个promise对象
  return request({
    url: '/screen/data',
    method: 'get'
  })
}
