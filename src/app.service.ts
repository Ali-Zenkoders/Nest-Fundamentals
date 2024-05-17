import { Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(private devConfigService: DevConfigService) {}
  getHello(): string {
    return 'Hello World!';
  }
  getHost(): string {
    return this.devConfigService.getDBHOST();
  }
}
