import { Module } from '@nestjs/common';
import { HelthCheckService } from './helth-check.service';
import { HelthCheckController } from './helth-check.controller';

@Module({
  controllers: [HelthCheckController],
  providers: [HelthCheckService],
})
export class HelthCheckModule {}
