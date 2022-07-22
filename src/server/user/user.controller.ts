import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes
} from '@nestjs/common';
import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';
import { ValidationPipe } from '../../pipe/validation.pipe';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger'

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@ApiTags('user') // 添加接口标签 装饰器
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // POST /user
  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post()
  @ApiOperation({summary: '新增用户'})
  @ApiBody({
    description: '新增',
    type: CreateUserDTO
  })
  async addOne(@Body() body: CreateUserDTO): Promise<UserResponse> {
    await this.userService.addOne(body);
    return {
      code: 200,
      message: 'Success.'
    };
  }

  // PUT /user/:_id
  @Put(':_id')
  @ApiOperation({summary: '修改用户'}) // 添加接口标题
  @ApiBody({
    description: '修改用户',
    type: EditUserDTO
  })
  async editOne(
    @Param('_id') _id: string,
    @Body() body: EditUserDTO
  ): Promise<UserResponse> {
    await this.userService.editOne(_id, body);
    return {
      code: 200,
      message: 'Success.'
    };
  }

  // GET /user/users
  @Get('users')
  @ApiOperation({summary: '获取所有用户'})
  async findAll(): Promise<UserResponse<User[]>> {
    return {
      code: 200,
      data: await this.userService.findAll(),
      message: 'Success.'
    };
  }

  // GET /user/:_id
  @Get(':_id')
  @ApiOperation({summary: '根据id获取用户'})
  async findOne(@Param('_id') _id: string): Promise<UserResponse<User>> {
    return {
      code: 200,
      data: await this.userService.findOne(_id),
      message: 'Success.'
    };
  }

  // DELETE /user/:_id
  @Delete(':_id')
  @ApiOperation({summary: '删除用户'})
  async deleteOne(@Param('_id') _id: string): Promise<UserResponse> {
    await this.userService.deleteOne(_id);
    return {
      code: 200,
      message: 'Success.'
    };
  }
}
