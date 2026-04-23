import { Module } from '@nestjs/common';
import { ApiGatewayConnectionController } from './api-gateway.controller';
import { ApiGatewayConnectionService } from './api-gateway.service';
import { ConnectionModule as SovioConnectionModule, APIGatewayModule as SovioAPIGatewayModule } from '@credebl/api-gateway';

@Module({
  imports: [SovioAPIGatewayModule],
  controllers: [ApiGatewayConnectionController],
  providers: [ApiGatewayConnectionService]
})
export class ConnectionModule {}
