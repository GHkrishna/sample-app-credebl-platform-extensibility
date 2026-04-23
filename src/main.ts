// import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { bootstrapApiGateway, ConnectionModule as SovioConnectionModule } from '@credebl/api-gateway';
import { ConnectionModule } from './api-gateway/api-gateway.module';
import { ApiGatewayConnectionController } from './api-gateway/api-gateway.controller';
import { ApiGatewayConnectionService } from './api-gateway/api-gateway.service';
import { bootstrapConnectionService, ConnectionService } from '@credebl/connection-service';
import { EnterpriseConnectionController } from './app.controller';
import { EnterpriseConnectionService } from './app.service';
dotenv.config();

// Connection start
async function main() {
  await bootstrapConnectionService([
    // Optional provider overrides
    {
      provide: ConnectionService,
      useClass: EnterpriseConnectionService,
    }, EnterpriseConnectionService
], [EnterpriseConnectionController]);
}
process.on('uncaughtException', (err) => {
  debugger; // VS Code will pause here
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
  debugger;
  console.error('Unhandled Rejection:', reason);
});
// API-gateway start
// async function main() {
//   await bootstrapApiGateway('',
//     {
//       overrides: [],
//       controllerOverrides: [],
//       importedModules: [
//         // ConnectionModule.register([],[ApiGatewayConnectionController] )
//         SovioConnectionModule.register([ApiGatewayConnectionService], [ApiGatewayConnectionController])
//       ]
//     }
//   )
// }


main();
