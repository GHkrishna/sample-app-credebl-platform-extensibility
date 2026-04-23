import { ApiResponseDto, ConnectionController, OrgRolesGuard, Roles } from '@credebl/api-gateway';
import { GetAllAgentConnectionsDto } from '@credebl/api-gateway/dist/connection/dtos/get-all-connections.dto';
import { OrgRoles, IResponse, ResponseMessages } from '@credebl/common';
import { Controller, Get, HttpStatus, Inject, Param, Query, Res, UseGuards } from '@nestjs/common';
import { ApiGatewayConnectionService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('api-gateway')
export class ApiGatewayConnectionController extends ConnectionController{

    /**
   * Get all connections from agent
   * @param user The user making the request
   * @param orgId The ID of the organization
   * @returns List of all connections from agent for a specific organization
   */
  @Get('/orgs/:orgId/agent/hello')
  @UseGuards(AuthGuard('jwt'), OrgRolesGuard)
  @Roles(OrgRoles.OWNER, OrgRoles.ADMIN, OrgRoles.ISSUER, OrgRoles.VERIFIER, OrgRoles.MEMBER)
  @ApiOperation({
    summary: `Fetch all connections from agent by orgId`,
    description: `Retrieve all connections from agent for the organization.`
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: ApiResponseDto })
  async getHelloFromAgent(
    @Query() getAllConnectionsDto: GetAllAgentConnectionsDto,
    @Param('orgId') orgId: string,
    @Res() res: Response
  ): Promise<Response> {

    const finalResponse: IResponse = {
      statusCode: HttpStatus.OK,
      message: ResponseMessages.connection.success.fetch,
      data: "Hello world"
    };
    return res.status(HttpStatus.OK).json(finalResponse);
  }
}
