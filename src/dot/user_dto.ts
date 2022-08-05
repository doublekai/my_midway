
import { ApiProperty } from '@midwayjs/swagger';
import { Rule, RuleType } from '@midwayjs/validate';
/*
下面是接口请求的参数以及校验
*/
export class PostUserDTO {



  @Rule(RuleType.string().max(20).required())
  @ApiProperty({ example: "张三", description: '用户名' })
  username: string;

  @Rule(RuleType.string().max(100).required())
  @ApiProperty({ example: '后端开发工程师', description: '用户描述' })
  description: string;

  @Rule(RuleType.number().max(1))
  @ApiProperty({ example: 1, description: '男女 男=1女=0,默认不传为男' })
  sex: number;
}
export class GetUserDTo extends PostUserDTO {
  @Rule(RuleType.number().required())
  @ApiProperty({ example: 1, description: '用户自增id' })
  id: number;
}

export class PutUserDTo extends PostUserDTO {
  @Rule(RuleType.string().max(20).empty(''))
  @ApiProperty({ example: "张三", description: '用户名' })
  username: string;

  @Rule(RuleType.string().max(100).empty(''))
  @ApiProperty({ example: '后端开发工程师', description: '用户描述' })
  description: string;

  @Rule(RuleType.number().max(1).empty())
  @ApiProperty({ example: 1, description: '男女 男=1女=0' })
  sex: number;
}
export class PageRequestDot {
  /*
    默认分页数据page 1，size 10
  */
  @Rule(RuleType.number().allow(1))
  @ApiProperty({ example: 1, description: '分页页码' })
  page: number;

  @Rule(RuleType.string().allow(10))
  @ApiProperty({ example: 10, description: '一页请求多少条数据' })
  size: number;

}

/*
下面是接口返回数据定义
*/
export class R<T> {
  @ApiProperty({ example: '200', description: '返回状态码' })
  code: number;
  @ApiProperty({ example: '请求成功', description: '返回信息' })
  msg: string;
  @ApiProperty({ example: '1231322222', description: '10位时间戳' })
  time: number;
  @ApiProperty({ example: "{}", description: '返回数据' })
  data: T;
}
export class UserResponse extends R<GetUserDTo> {

}

