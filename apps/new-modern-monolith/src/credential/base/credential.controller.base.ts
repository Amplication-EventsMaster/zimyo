/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CredentialService } from "../credential.service";
import { CredentialCreateInput } from "./CredentialCreateInput";
import { Credential } from "./Credential";
import { CredentialFindManyArgs } from "./CredentialFindManyArgs";
import { CredentialWhereUniqueInput } from "./CredentialWhereUniqueInput";
import { CredentialUpdateInput } from "./CredentialUpdateInput";
import { DestinationCalendarFindManyArgs } from "../../destinationCalendar/base/DestinationCalendarFindManyArgs";
import { DestinationCalendar } from "../../destinationCalendar/base/DestinationCalendar";
import { DestinationCalendarWhereUniqueInput } from "../../destinationCalendar/base/DestinationCalendarWhereUniqueInput";

export class CredentialControllerBase {
  constructor(protected readonly service: CredentialService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Credential })
  async createCredential(
    @common.Body() data: CredentialCreateInput
  ): Promise<Credential> {
    return await this.service.createCredential({
      data: {
        ...data,

        appField: data.appField
          ? {
              connect: data.appField,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        appField: {
          select: {
            id: true,
          },
        },

        id: true,
        key: true,
        typeField: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Credential] })
  @ApiNestedQuery(CredentialFindManyArgs)
  async credentials(@common.Req() request: Request): Promise<Credential[]> {
    const args = plainToClass(CredentialFindManyArgs, request.query);
    return this.service.credentials({
      ...args,
      select: {
        appField: {
          select: {
            id: true,
          },
        },

        id: true,
        key: true,
        typeField: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Credential })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async credential(
    @common.Param() params: CredentialWhereUniqueInput
  ): Promise<Credential | null> {
    const result = await this.service.credential({
      where: params,
      select: {
        appField: {
          select: {
            id: true,
          },
        },

        id: true,
        key: true,
        typeField: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Credential })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCredential(
    @common.Param() params: CredentialWhereUniqueInput,
    @common.Body() data: CredentialUpdateInput
  ): Promise<Credential | null> {
    try {
      return await this.service.updateCredential({
        where: params,
        data: {
          ...data,

          appField: data.appField
            ? {
                connect: data.appField,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          appField: {
            select: {
              id: true,
            },
          },

          id: true,
          key: true,
          typeField: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Credential })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCredential(
    @common.Param() params: CredentialWhereUniqueInput
  ): Promise<Credential | null> {
    try {
      return await this.service.deleteCredential({
        where: params,
        select: {
          appField: {
            select: {
              id: true,
            },
          },

          id: true,
          key: true,
          typeField: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/destinationCalendars")
  @ApiNestedQuery(DestinationCalendarFindManyArgs)
  async findDestinationCalendars(
    @common.Req() request: Request,
    @common.Param() params: CredentialWhereUniqueInput
  ): Promise<DestinationCalendar[]> {
    const query = plainToClass(DestinationCalendarFindManyArgs, request.query);
    const results = await this.service.findDestinationCalendars(params.id, {
      ...query,
      select: {
        booking: true,

        credential: {
          select: {
            id: true,
          },
        },

        eventType: {
          select: {
            id: true,
          },
        },

        externalId: true,
        id: true,
        integration: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/destinationCalendars")
  async connectDestinationCalendars(
    @common.Param() params: CredentialWhereUniqueInput,
    @common.Body() body: DestinationCalendarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      destinationCalendars: {
        connect: body,
      },
    };
    await this.service.updateCredential({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/destinationCalendars")
  async updateDestinationCalendars(
    @common.Param() params: CredentialWhereUniqueInput,
    @common.Body() body: DestinationCalendarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      destinationCalendars: {
        set: body,
      },
    };
    await this.service.updateCredential({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/destinationCalendars")
  async disconnectDestinationCalendars(
    @common.Param() params: CredentialWhereUniqueInput,
    @common.Body() body: DestinationCalendarWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      destinationCalendars: {
        disconnect: body,
      },
    };
    await this.service.updateCredential({
      where: params,
      data,
      select: { id: true },
    });
  }
}
