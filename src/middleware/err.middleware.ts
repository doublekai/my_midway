import { Context, IMiddleware, NextFunction } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { INTERNAL_ERROR } from '../config/config.common';



@Middleware()
export class ErrorMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      try {
        await next();
      } catch (err) {


        return INTERNAL_ERROR.register(err.msg)
      }
    };
  }

  static getName(): string {
    return 'error';
  }
}
