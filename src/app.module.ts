import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as process from 'process';

const mongodbUri =
  process.env.NODE_ENV === 'production'
    ? 'mongodb://localhost:27017'
    : 'mongodb://192.168.2.101:27017';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(mongodbUri, {
      dbName: 'blog',
      auth: {
        username: 'root',
        password: 'mongo',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
