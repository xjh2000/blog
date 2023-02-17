/*
 * @Author: zhangyu
 * @Date: 2021-04-14 21:28:08
 * @LastEditTime: 2021-08-06 10:25:14
 */

let port = process.env.NODE_ENV === 'prod'? 8080 : 8080;

// 项目配置文件
module.exports = {
    port: port, // 项目启动端口
    jwt_key: 'ThinkJS', // JWT加密的秘钥
    expiresIn: 60 * 60, // JWT过期时间
}