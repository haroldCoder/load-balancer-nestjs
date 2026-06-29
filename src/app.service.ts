import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const port = process.env.PORT ?? 3000;
    const instance = process.env.INSTANCE_NAME ?? 'Default';
    return `Hello World from NestJS! [Instance: ${instance}] [Port: ${port}]`;
  }
}
