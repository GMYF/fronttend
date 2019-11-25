import axios from 'axios'
import qs from 'qs'
// 引入路由对象
import router from '@/router/index'
// let instance = axios.create({ timeout: 1000 * 12 })
/* 配置接口地址 */
// instance.defaults.baseUrl = ''
// instance.interceptors.request.use((config) => {
//   /* 在发送之前拦截 */
//   if (config.method === 'post') {
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//     config.data = qs.stringify(config.data)
//   } else if (config.method === 'get') {
//     config.params = {...config.data}
//   }
//   return config
// }, (error) => {
//   return Promise.reject(error)
// })

/* 返回状态判断（添加响应式拦截） */
// instance.interceptors.response.use((res) => {
//   // 如果返回状态为1000，则是链接超时重新登录
//   if (res.data.status === 1000) {
//     router.push({ path: '/user/login' })
//   }
//   /* 对响应数据操作 */
//   if (res.data.code === 500210) {
//     /* 获取后端返回的状态，如果是500210，则是session超时，重新登录 */
//     /* 这里何不改为，先跳转到自定义页面，然后通过点击跳转登录 */
//     router.push({ path: '/logout' })
//   } else if (!res.data.success) {
//     return Promise.resolve(res)
//   }
//   return res
// }, (error) => {
//   return Promise.reject(error)
// })

export const request = (url, params, method, Func, isJson) => {
  // let _this = this;
  axios({
    method: method,
    url: url,
    data: method === 'post' ? params : '',
    transformRequest: [function (data) {
      if (isJson === 1) {
        // debugger       // 判断是否json格式或者是表单提交形式
        return qs.stringify(data)
      }
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret // 便于直接取到内部data
    }],
    headers: {
      // 认证和请求方式
      'Content-Type': isJson === 1 ? 'application/json'
        : 'application/x-www-form-urlencoded'
      // 'authorization': sessionStorage.getItem('principal'),
      // 'token': sessionStorage.getItem('token')
    },
    params: method === 'get' ? params : ''
  }).then(data => {
    // 如果返回状态为1000，则是链接超时重新登录
    if (data.data.status === 1000) {
      router.push({ path: '/user/login' })
    } else if (!data.data.success) {
      return Promise.resolve(data)
    } else if (data.data.code === 200) {
      Func(data.data.data)
    } else if (data.data.code === 400 || data.data.code === 505 || data.data.code === 404 || data.data.code === 500) {
      alert('网络异常')
    } else if (data.data.code === 500210) {
      request('token/refresh', {
        'authorization': sessionStorage.getItem('principal'),
        'refreshToken': sessionStorage.getItem('refreshToken')
      }, 'get', (res) => {
        // 缓存新的token
        console.log(res)
        let token = res.token
        let principal = res.principal
        let refreshToken = res.refreshToken
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('principal', principal)
        sessionStorage.setItem('refreshToken', refreshToken)
        request(url, params, method, Func)
      })
    //   /* 获取后端返回的状态，如果是500210，则是session超时，重新登录 */
    // /* 这里何不改为，先跳转到自定义页面，然后通过点击跳转登录 */
    // router.push({ path: '/logout' })
    }
  })
}

export const postRequest = (url, params, Func, isJson) => {
  request(url, params, 'post', Func, isJson)
}
export const getRequest = (url, params, Func, isJson) => {
  request(url, params, 'get', Func, isJson)
}
// uploadFileRequest  图片上传
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: url, // `${base}${url}`
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data',
      'authorization': sessionStorage.getItem('principal'),
      'token': sessionStorage.getItem('token')
      // 'authorization':'admin',
      // 'token':'740a1d6be9c14292a13811cabb99950b'
    }
  })
}
// /* 返回一个Promise(发送post)请求 */
// export function fetchPost (url, params, isJson) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params)
//       .then(response => {
//         resolve(response)
//       }, err => {
//         reject(err)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }
// /* 返回一个Promise(发送get)请求 */
// export function fetchGet (url, params) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, { params: params })
//       .then(response => {
//         resolve(response)
//       }, err => {
//         reject(err)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }
// /* 返回两个方法 */
// export default {
//   fetchPost,
//   fetchGet
// }
