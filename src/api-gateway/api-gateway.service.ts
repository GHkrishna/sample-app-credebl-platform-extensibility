import { ConnectionService } from '@credebl/api-gateway';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiGatewayConnectionService extends ConnectionService {}
