import axios from 'axios'

// 创建一个axios实例, 其实就是一个function
const service = axios.create(
  {
    // 所有的请求方法将会基于baseURL作为前缀
    baseURL: 'http://localhost:8080',
    timeout: 5000
  }
)

// 这里可以创建自定义的拦截器
service.interceptors.response.use(
  // 请求正常情况下调用
  response => {
    // console.log(response)
    if (response.status === 200 && response.data) {
      // 如果满足条件，返回data
      return response.data
    } else {
      // 如果不满足条件，返回Error
      return Promise.reject(new Error('请求失败'))
    }
  },
  // 请求异常情况下调用
  error => {
    return Promise.reject(error)
  }
)

// 将这个实例导出
export default service
