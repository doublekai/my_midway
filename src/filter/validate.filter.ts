import { Catch } from '@midwayjs/decorator';

import { MidwayValidationError } from '@midwayjs/validate';
import { PARAM_VALIDATION_ERROR } from '../config/config.common';

@Catch(MidwayValidationError)
export class ValidateErrorFilter {
  async catch(err: MidwayValidationError, ctx: any) {

    // ...
    return PARAM_VALIDATION_ERROR.register(err.message)
  }
}

