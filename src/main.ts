import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionFilter } from './handler/exception/exception.filter';
import { RespondInterceptor } from './handler/respond/respond.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 统一异常处理
  app.useGlobalFilters(new ExceptionFilter());
  // 统一正常数据的返回
  app.useGlobalInterceptors(new RespondInterceptor());

  await app.listen(8080);
}

bootstrap().then((r) => console.log(r));
