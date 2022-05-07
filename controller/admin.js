import config from '../config/config.js'
import AdminModel from '../model/admin.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



class Admin{
    constructor(){
      
    }

    async login(req,res){
      let { username, password} = req.body;

      //验证表单
      if ( !username || !password) {
        res.send({
          status: 1,
          msg: '表单信息有误'
        })
        return
      }

      //判断是否已存在注册用户？不存在将直接进行注册，存在将进行用户信息校验
      try {
        const admin = await AdminModel.findOne({username})

        if (!admin){
          const salt = bcrypt.genSaltSync(10)

          password = bcrypt.hashSync(password,salt)

          const user = {
            username,
            password
          }

          AdminModel.create(user,()=>{
            res.send({
              status: 0,
              msg: '注册成功'
            })
          })

        } else if(!bcrypt.compareSync(password,admin.password)){
          res.send({
            status: 1,
            msg: '用户名或密码错误'
          })
        } else {
          jwt.sign(username,config.jwtSecert,(err,token)=>{
            console.log(token);
            res.send({
              status: 0,
              msg: '登录成功',
              token
            })
          })
        }
      } catch(err){
        console.log(err)
        res.send({
          status: '-1',
          msg: 'faild',
        })
      }
    }

    adminInfo(){
      jwt.verify()
    }
}

export default new Admin();