import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '../utils/logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new LoggerService();

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, baseUrl } = request;

    const userAgent = request.get('user-agent') || '';

    response.on('close', () => {
      const { statusCode } = response;

      this.logger.log(
        `${method} ${baseUrl}   ${statusCode} - ${userAgent} ${ip}`, "HTTP"
      );
    });

    next();
  }


}
