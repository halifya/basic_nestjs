import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '../utils/logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new LoggerService
   
  use(req: Request, res: Response, next: NextFunction) {
    next();
    this.logger.log(`HTTP  request[${res.statusCode}]  ${req.method}   ${req.url}`,"LOG-MIDDLEWARE");
    
  }
}