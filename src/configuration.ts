import { App, Configuration, Logger } from '@midwayjs/decorator';
import { ILifeCycle, ILogger } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as egg from '@midwayjs/web';
import * as swagger from '@midwayjs/swagger';
import * as orm from '@midwayjs/typeorm';
import * as validate from '@midwayjs/validate';
import { ValidateErrorFilter } from './filter/validate.filter';
import { DefaultErrorFilter } from './filter/default.filter';
//import { ErrorMiddleware } from './middleware/err.middleware';
//import { ErrorMiddleware } from './middleware/err.middleware';
@Configuration({
  imports: [egg],
  importConfigs: [join(__dirname, './config')],
})

export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;
  @Logger()
  logger: ILogger;
  async onReady() {
    this.logger.info("=================================================");
    this.logger.info("===================服务启动======================")
    this.logger.info("=================================================");
    //加载过滤器
    this.app.useFilter([ValidateErrorFilter, DefaultErrorFilter]);
    //加载中间件
    //this.app.useMiddleware(ErrorMiddleware);
  }
}
@Configuration({
  imports: [
    // ...
    orm, swagger, validate                                              // 加载 typeorm 组件
  ],
  importConfigs: [
    join(__dirname, './config')
  ]
})
export class MainConfiguration {

}




