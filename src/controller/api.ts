import { Inject, Controller } from '@midwayjs/decorator';
import { Context } from 'egg';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

}

