import { Module } from '@nestjs/common';
// import { EnterpriseConnectionController } from './app.controller';
import { EnterpriseConnectionService } from './app.service';
import { EnterpriseConnectionController } from './app.controller';
import { ConnectionModule } from './api-gateway/api-gateway.module';

@Module({
  imports: [ConnectionModule],
  controllers: [EnterpriseConnectionController],
  providers: [EnterpriseConnectionService]
})
export class AppModule {}
