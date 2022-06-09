//导入express模块
const express = require('express')


//创建服务器的实例对象
const app = express();


//导入并配置cors中间件
const cors = require('cors')
app.use(cors())


//配置解析表单数据的中间件 application/x-www-form-urlencoded格式的表单数据中间件
app.use(express.urlencoded({ extended:false }))


//导入并使用路由模块
const userRouter = require('./router/user')
app.use('/api',userRouter)

//启动服务器
app.listen(3009,()=>{
  console.log('api server running at http://127.0.0.1:3009')
})