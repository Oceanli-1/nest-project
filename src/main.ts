import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀
  // 配置 Swagger
  const options = new DocumentBuilder()
    .setTitle('Nest test')
    .setDescription('The nest-test API description')
    .setVersion('1.0.0')
    // .addTag('Nest')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3010);
}
bootstrap();
