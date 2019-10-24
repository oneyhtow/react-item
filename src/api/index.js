/* 
包含n个接口请求函数模块
函数返回值是promise
*/
import ajax from './ajax'

//登录
export const reqLogin = ({username,password}) => 
  ajax({
    url:'/login',
    method:'POST',
    data:{username,password}
  })
