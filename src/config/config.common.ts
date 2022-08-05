export class ERR {
  data: any;
  msg: string | undefined;
  code: number;
  time: number;

  constructor(code: number, msg: string) {
    this.code = code;
    this.msg = msg;
    this.time = Date.parse(new Date().toString()) / 1000;
  }
  register(this, data?: any, msg?: string) {
    this.data = data;

    if (msg != undefined) this.msg = msg;
    return this;
  }

}
export const OK = new ERR(200, "请求成功")
export const ERROR = new ERR(400, "请求错误")
export const PARAM_VALIDATION_ERROR = new ERR(422, "输入参数不正确")
export const INTERNAL_ERROR = new ERR(500, "服务器内部出错请联系管理员")