//导入数据库操作模块
const db = require('../db/index')

//导入bcryptjs这个包
const bcrypt = require('bcryptjs')



//注册新用户的处理函数
exports.regUser=(req,res)=>{
  //获取客户端提交到服务器的用户信息
  const userInfo = req.body
  //对表单中的数据进行合法性校验
  if(!userInfo.username || !userInfo.password){
    return res.send({status:1,message:'用户名或密码不合法！'})
  }
  //定义SQL语句，查询用户名是否被占用
  const sqlStr = 'select * from ev_users where username=?';
  db.query(sqlStr,userInfo.username,(err,results)=>{
    //执行SQL语句失败
    if(err){
      return res.send({status:1, message: err.message })
    }
    //判断用户名是否被占用
    if(results.length > 0){
      return res.send({status:1, message:'用户名被占用，请更换其他用户名'})
    }
    //调用bcyptjs.hashSync()对密码进行加密
    userInfo.password=bcrypt.hashSync(userInfo.password,10);
  })
  //res.send('reguser ok')
}


//登录的处理函数
exports.login=(req,res)=>{
  res.send('login ok')
}