import { Controller, Get } from '@nestjs/common';
import { EnterpriseConnectionService } from './app.service';
import { ConnectionController } from '@credebl/connection-service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class EnterpriseConnectionController extends ConnectionController{
  constructor(private readonly enterpriseConnectionService: EnterpriseConnectionService) {
      super(enterpriseConnectionService);
  }

  /**
   * Receive hello message
   */
  @MessagePattern('get-good-hello')
  async getHello(): Promise<string> {
    console.log("Getting good help");
    return this.enterpriseConnectionService.getSomelogs();
  }

  // /**
  //  * Receive hello message
  //  */
  // @MessagePattern('get-msg')
  // async getMessage(): Promise<string> {
  //   return this.appService.getSomemsgs();
  // }

}
