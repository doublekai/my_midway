import { ALL, Body, Controller, Del, Get, Inject, Param, Post, Put, Query } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/typeorm";
import { Validate } from '@midwayjs/validate';
import { Context } from "egg";
import { Repository } from "typeorm";
import { PageRequestDot, PostUserDTO, PutUserDTo } from "../../dot/user_dto";
import { UserModel } from "../../entity/User";

@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;
  @InjectEntityModel(UserModel)
  UserModel: Repository<UserModel>;

  @Get('/', { summary: '用户信息', description: "获取用户信息" })
  @Validate()
  async get_user(@Query(ALL) query: PageRequestDot) {
    let users = await this.UserModel.find({ where: { isPublished: false } });
    return {
      code: 200,
      msg: "请求成功",
      data: [users, query]
    };

  }
  @Post('/')
  @Validate()
  async add_user(@Body() usertod: PostUserDTO) {
    let users = await this.UserModel.save(usertod);
    return { 's': usertod, 'data': users };

  }
  @Put('/:id')
  @Validate()
  async update_user(@Param('id') id: number, @Body() usertod: PutUserDTo) {
    let users = await this.UserModel.findOne({
      where: {
        id: id
      }
    });
    Object.keys(usertod).forEach(key => {
      users[key] = usertod[key];
    })
    await this.UserModel.save(users);
    return { 's': users, 'data': usertod };
  }
  @Del('/:id')
  @Validate()
  async del_user(@Param('id') id: number) {
    let users = await this.UserModel.findOne({
      where: {
        id: id
      }
    });
    users.isPublished = true;
    await this.UserModel.save(users);
    return { 's': users, 'data': users };
  }
}
