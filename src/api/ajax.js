/*对axio进行2次封装一个能发ajax请求的函数*/
import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
 baseURL:'/api', 
 timeout:20000
})
instance.interceptors.request.use((config)=>{
  const data=config.data
  if (data instanceof Object) {
    config.data=qs.stringify(data)
    
  }
  return config
}) 

instance.interceptors.response.use(
  response =>{

    return response.data
  },
  error => {
    alert('请求错误:'+error.message)
    return new Promise(()=>{})
  }
)
export default instance