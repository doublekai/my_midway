
import { ApiProperty } from '@midwayjs/swagger';
import { Rule, RuleType } from '@midwayjs/validate';

export class PostUserDTO {



  @Rule(RuleType.string().max(20).required())
  @ApiProperty({ example: "张三", description: '用户名' })
  username: string;

  @Rule(RuleType.string().max(100).required())
  @ApiProperty({ example: '后端开发工程师', description: '用户描述' })
  description: string;

  @Rule(RuleType.number().max(1))
  @ApiProperty({ example: 1, description: '男女 男=1女=0' })
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

  @Rule(RuleType.number().max(1).empty(''))
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


