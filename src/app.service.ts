import { Injectable } from '@nestjs/common';
import { ConnectionService } from "@credebl/connection-service"

@Injectable()
export class EnterpriseConnectionService extends ConnectionService {

  getSomelogs() {
    const msg = "This is from @sovio/connection-service"
    console.log(msg)
    return msg
  }

  // getSomeGoodlogs() {
  //   const msg = "This is good logs from @sovio/connection-service"
  //   console.log(msg)
  //   return msg
  // }


  // getSomemsgs() {
  //   const msg = "This is some message from custom @sovio/connection-service"
  //   console.log(msg)
  //   return msg
  // }
}
