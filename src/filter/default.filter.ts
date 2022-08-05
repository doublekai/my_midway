import { Catch } from '@midwayjs/decorator';
import { INTERNAL_ERROR } from '../config/config.common';

@Catch()
export class DefaultErrorFilter {
  async catch(err: Error, ctx: any) {

    // ...
    return INTERNAL_ERROR.register(err)
  }
}

