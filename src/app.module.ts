import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';
import { StudentsModule } from './students/students.module';
// 引入 Mongoose 
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './server/user/user.module';

@Module({
  // 用forRoot方法连接数据库
  imports: [MongooseModule.forRoot('mongodb://localhost/data'), StudentsModule, UserModule],
  controllers: [AppController, StudentsController],
  providers: [AppService, StudentsService],
})
export class AppModule {}
