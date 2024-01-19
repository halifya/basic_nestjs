import { Controller, Get } from '@nestjs/common';
import { HelthCheckService } from './helth-check.service';

@Controller('helth-check')
export class HelthCheckController {
  constructor(private readonly helthCheckService: HelthCheckService) {}

  @Get()
  async helthCheck() {
    return this.helthCheckService.heltChecker()
  }
}
