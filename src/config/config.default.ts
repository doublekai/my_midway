import { UserModel } from '../entity/User';
export default {


  // ...
  keys: '1639994056460_8009',
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: "my_midway",
        synchronize: true,     // 如果第一次使用，不存在表，有同步的需求可以写 true
        logging: false,

        // 配置实体模型
        entities: [UserModel],
      }
    }
  },
}