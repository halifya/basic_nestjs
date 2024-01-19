import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './module/cats/cats.module';
import dbConfig from 'src/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HelthCheckModule } from './module/helth-check/helth-check.module';
import { LoggerModule } from './utils/logger/logger.module';
import { LoggerController } from './utils/logger/logger.controller';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot(dbConfig), HelthCheckModule, LoggerModule],
  controllers: [AppController, LoggerController],
  providers: [AppService],
})
export class AppModule {}