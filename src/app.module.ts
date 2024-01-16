import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import dbConfig from 'src/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot(dbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
