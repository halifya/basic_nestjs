import { Injectable } from '@nestjs/common';
import { StandardRespInterface } from '../interface/helper.interface';

@Injectable()
export class HelthCheckService {
  heltChecker() {
    const result : StandardRespInterface = {
      success: true,
      message: "Service Active",
      data: [],
    }
    return result
  }
}
