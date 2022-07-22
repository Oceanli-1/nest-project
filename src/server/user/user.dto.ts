import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  readonly _id: String;
  @ApiProperty()
  @IsNotEmpty({message: '用户名不能为空'})
  @IsString({ message: '用户名必须是 String 类型' })
  readonly user_name: string;
  @ApiProperty()
  readonly password: string;
  @ApiPropertyOptional({
    description: '年龄随便写',
  })
  readonly age: Number;
}

export class EditUserDTO {
  @ApiProperty()
  @IsNotEmpty({message: '用户名不能为空'})
  @IsString({ message: '用户名必须是 String 类型' })
  readonly user_name: string;
  @ApiProperty()
  readonly password: string;
  @ApiPropertyOptional({
    description: '年龄随便写',
  })
  readonly age: Number;
}