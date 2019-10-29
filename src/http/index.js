import axios from 'axios'
import qs from 'qs'
// 引入路由对象
import router from '@/router/index'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

/* 配置接口地址 */
axios.defaults.baseUrl = ''
axios.interceptors.request.use((config) => {
  /* 在发送之前拦截 */
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

/* 返回状态判断（添加响应式拦截） */
axios.interceptors.response.use((res) => {
  //  如果返回状态为1000，则是链接超时重新登录
  if (res.data.status === 1000) {
    router.push({ path: '/user/login' })
  }
  /* 对响应数据操作 */
  if (res.data.code === 500210) {
    /* 获取后端返回的状态，如果是500210，则是session超时，重新登录 */
    /* 这里何不改为，先跳转到自定义页面，然后通过点击跳转登录 */
    location.replace('/#/logout')
  } else if (!res.data.success) {
    return Promise.resolve(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

/* 返回一个Promise(发送post)请求 */
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
/* 返回一个Promise(发送get)请求 */
export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
/* 返回两个方法 */
export default {
  fetchPost,
  fetchGet
}
