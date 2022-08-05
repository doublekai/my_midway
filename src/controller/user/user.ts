import { ALL, Body, Controller, Del, Get, Inject, Param, Post, Put, Query } from "@midwayjs/decorator";
import { ApiResponse } from "@midwayjs/swagger";
import { InjectEntityModel } from "@midwayjs/typeorm";
import { Validate } from '@midwayjs/validate';
import { Context } from "egg";
import { Repository } from "typeorm";
import { OK } from "../../config/config.common";
import { PageRequestDot, PostUserDTO, PutUserDTo, UserResponse } from "../../dot/user_dto";
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
    return OK.register(users);

  }
  @Post('/')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: UserResponse,
  })
  @Validate()
  async add_user(@Body() usertod: PostUserDTO) {
    let users = await this.UserModel.save(usertod);
    return OK.register(users);

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
    return OK.register(users)
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
    return OK.register(undefined, "删除成功")
  }
}
