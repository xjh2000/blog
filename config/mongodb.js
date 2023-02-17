/*
 * @Author: zhangyu
 * @Date: 2021-04-21 20:58:24
 * @LastEditTime: 2021-09-10 20:16:17
 */

let db = process.env.NODE_ENV === 'prod' ?
    {
        host: 'mongo',
        port: 27017,
        user: 'root',
        password: 'mongo',
        database: 'blog'
    } :
    {
        host: '192.168.2.101',
        port: 27017,
        user: 'root',
        password: 'mongo',
        database: 'blog'
    };


// MongoDB配置
module.exports = {
    db: db
}