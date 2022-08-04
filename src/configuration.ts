import { App, Configuration, Logger } from '@midwayjs/decorator';
import { ILifeCycle, ILogger } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as egg from '@midwayjs/web';
import * as swagger from '@midwayjs/swagger';
import * as orm from '@midwayjs/typeorm';
import * as validate from '@midwayjs/validate';
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
  }
}

@Configuration({
  imports: [
    // ...
    orm, swagger, validate                                                        // 加载 typeorm 组件
  ],
  importConfigs: [
    join(__dirname, './config')
  ]
})
export class MainConfiguration {

}



