import { Module } from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Hashtag } from './entities/hashtag.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port : 3306,
    username: "root",
    //password: "root",
    database: 'nestjs_sql_tutorial',
      entities: [Post, Hashtag],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule{}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
await app.listen(3001);
}

bootstrap();