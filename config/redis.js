/*
 * @Author: zhangyu
 * @Date: 2021-04-21 20:58:24
 * @LastEditTime: 2021-04-27 23:33:44
 */

let db = process.env.NODE_ENV === 'prod' ?
    {
        host: 'redis',
        port: 6379,
        db: 0
    } :
    {
        host: '192.168.2.101',
        port: 6379,
        db: 0
    };


// redis配置
module.exports = {
    db: db
}