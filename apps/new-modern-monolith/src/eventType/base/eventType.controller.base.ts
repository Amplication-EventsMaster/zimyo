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
import { EventTypeService } from "../eventType.service";
import { EventTypeCreateInput } from "./EventTypeCreateInput";
import { EventType } from "./EventType";
import { EventTypeFindManyArgs } from "./EventTypeFindManyArgs";
import { EventTypeWhereUniqueInput } from "./EventTypeWhereUniqueInput";
import { EventTypeUpdateInput } from "./EventTypeUpdateInput";
import { AvailabilityFindManyArgs } from "../../availability/base/AvailabilityFindManyArgs";
import { Availability } from "../../availability/base/Availability";
import { AvailabilityWhereUniqueInput } from "../../availability/base/AvailabilityWhereUniqueInput";
import { EventTypeCustomInputFindManyArgs } from "../../eventTypeCustomInput/base/EventTypeCustomInputFindManyArgs";
import { EventTypeCustomInput } from "../../eventTypeCustomInput/base/EventTypeCustomInput";
import { EventTypeCustomInputWhereUniqueInput } from "../../eventTypeCustomInput/base/EventTypeCustomInputWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { WebhookFindManyArgs } from "../../webhook/base/WebhookFindManyArgs";
import { Webhook } from "../../webhook/base/Webhook";
import { WebhookWhereUniqueInput } from "../../webhook/base/WebhookWhereUniqueInput";
import { WorkflowsOnEventTypeFindManyArgs } from "../../workflowsOnEventType/base/WorkflowsOnEventTypeFindManyArgs";
import { WorkflowsOnEventType } from "../../workflowsOnEventType/base/WorkflowsOnEventType";
import { WorkflowsOnEventTypeWhereUniqueInput } from "../../workflowsOnEventType/base/WorkflowsOnEventTypeWhereUniqueInput";

export class EventTypeControllerBase {
  constructor(protected readonly service: EventTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EventType })
  async createEventType(
    @common.Body() data: EventTypeCreateInput
  ): Promise<EventType> {
    return await this.service.createEventType({
      data: {
        ...data,

        destinationCalendar: data.destinationCalendar
          ? {
              connect: data.destinationCalendar,
            }
          : undefined,

        schedule: data.schedule
          ? {
              connect: data.schedule,
            }
          : undefined,
      },
      select: {
        afterEventBuffer: true,
        beforeEventBuffer: true,
        bookings: true,
        currency: true,
        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableGuests: true,
        eventName: true,
        hashedLink: true,
        hidden: true,
        hideCalendarNotes: true,
        id: true,
        length: true,
        locations: true,
        metadata: true,
        minimumBookingNotice: true,
        periodCountCalendarDays: true,
        periodDays: true,
        periodEndDate: true,
        periodStartDate: true,
        periodType: true,
        position: true,
        price: true,
        recurringEvent: true,
        requiresConfirmation: true,

        schedule: {
          select: {
            id: true,
          },
        },

        schedulingType: true,
        seatsPerTimeSlot: true,
        slotInterval: true,
        slug: true,
        successRedirectUrl: true,
        team: true,
        timeZone: true,
        title: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EventType] })
  @ApiNestedQuery(EventTypeFindManyArgs)
  async eventTypes(@common.Req() request: Request): Promise<EventType[]> {
    const args = plainToClass(EventTypeFindManyArgs, request.query);
    return this.service.eventTypes({
      ...args,
      select: {
        afterEventBuffer: true,
        beforeEventBuffer: true,
        bookings: true,
        currency: true,
        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableGuests: true,
        eventName: true,
        hashedLink: true,
        hidden: true,
        hideCalendarNotes: true,
        id: true,
        length: true,
        locations: true,
        metadata: true,
        minimumBookingNotice: true,
        periodCountCalendarDays: true,
        periodDays: true,
        periodEndDate: true,
        periodStartDate: true,
        periodType: true,
        position: true,
        price: true,
        recurringEvent: true,
        requiresConfirmation: true,

        schedule: {
          select: {
            id: true,
          },
        },

        schedulingType: true,
        seatsPerTimeSlot: true,
        slotInterval: true,
        slug: true,
        successRedirectUrl: true,
        team: true,
        timeZone: true,
        title: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EventType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async eventType(
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<EventType | null> {
    const result = await this.service.eventType({
      where: params,
      select: {
        afterEventBuffer: true,
        beforeEventBuffer: true,
        bookings: true,
        currency: true,
        description: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableGuests: true,
        eventName: true,
        hashedLink: true,
        hidden: true,
        hideCalendarNotes: true,
        id: true,
        length: true,
        locations: true,
        metadata: true,
        minimumBookingNotice: true,
        periodCountCalendarDays: true,
        periodDays: true,
        periodEndDate: true,
        periodStartDate: true,
        periodType: true,
        position: true,
        price: true,
        recurringEvent: true,
        requiresConfirmation: true,

        schedule: {
          select: {
            id: true,
          },
        },

        schedulingType: true,
        seatsPerTimeSlot: true,
        slotInterval: true,
        slug: true,
        successRedirectUrl: true,
        team: true,
        timeZone: true,
        title: true,
        userId: true,
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
  @swagger.ApiOkResponse({ type: EventType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEventType(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() data: EventTypeUpdateInput
  ): Promise<EventType | null> {
    try {
      return await this.service.updateEventType({
        where: params,
        data: {
          ...data,

          destinationCalendar: data.destinationCalendar
            ? {
                connect: data.destinationCalendar,
              }
            : undefined,

          schedule: data.schedule
            ? {
                connect: data.schedule,
              }
            : undefined,
        },
        select: {
          afterEventBuffer: true,
          beforeEventBuffer: true,
          bookings: true,
          currency: true,
          description: true,

          destinationCalendar: {
            select: {
              id: true,
            },
          },

          disableGuests: true,
          eventName: true,
          hashedLink: true,
          hidden: true,
          hideCalendarNotes: true,
          id: true,
          length: true,
          locations: true,
          metadata: true,
          minimumBookingNotice: true,
          periodCountCalendarDays: true,
          periodDays: true,
          periodEndDate: true,
          periodStartDate: true,
          periodType: true,
          position: true,
          price: true,
          recurringEvent: true,
          requiresConfirmation: true,

          schedule: {
            select: {
              id: true,
            },
          },

          schedulingType: true,
          seatsPerTimeSlot: true,
          slotInterval: true,
          slug: true,
          successRedirectUrl: true,
          team: true,
          timeZone: true,
          title: true,
          userId: true,
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
  @swagger.ApiOkResponse({ type: EventType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEventType(
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<EventType | null> {
    try {
      return await this.service.deleteEventType({
        where: params,
        select: {
          afterEventBuffer: true,
          beforeEventBuffer: true,
          bookings: true,
          currency: true,
          description: true,

          destinationCalendar: {
            select: {
              id: true,
            },
          },

          disableGuests: true,
          eventName: true,
          hashedLink: true,
          hidden: true,
          hideCalendarNotes: true,
          id: true,
          length: true,
          locations: true,
          metadata: true,
          minimumBookingNotice: true,
          periodCountCalendarDays: true,
          periodDays: true,
          periodEndDate: true,
          periodStartDate: true,
          periodType: true,
          position: true,
          price: true,
          recurringEvent: true,
          requiresConfirmation: true,

          schedule: {
            select: {
              id: true,
            },
          },

          schedulingType: true,
          seatsPerTimeSlot: true,
          slotInterval: true,
          slug: true,
          successRedirectUrl: true,
          team: true,
          timeZone: true,
          title: true,
          userId: true,
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

  @common.Get("/:id/availability")
  @ApiNestedQuery(AvailabilityFindManyArgs)
  async findAvailability(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<Availability[]> {
    const query = plainToClass(AvailabilityFindManyArgs, request.query);
    const results = await this.service.findAvailability(params.id, {
      ...query,
      select: {
        date: true,
        days: true,
        endTime: true,

        eventType: {
          select: {
            id: true,
          },
        },

        id: true,

        schedule: {
          select: {
            id: true,
          },
        },

        startTime: true,

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

  @common.Post("/:id/availability")
  async connectAvailability(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/availability")
  async updateAvailability(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/availability")
  async disconnectAvailability(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: AvailabilityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      availability: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/customInputs")
  @ApiNestedQuery(EventTypeCustomInputFindManyArgs)
  async findCustomInputs(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<EventTypeCustomInput[]> {
    const query = plainToClass(EventTypeCustomInputFindManyArgs, request.query);
    const results = await this.service.findCustomInputs(params.id, {
      ...query,
      select: {
        eventType: {
          select: {
            id: true,
          },
        },

        id: true,
        label: true,
        placeholder: true,
        required: true,
        type: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customInputs")
  async connectCustomInputs(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: EventTypeCustomInputWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customInputs: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customInputs")
  async updateCustomInputs(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: EventTypeCustomInputWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customInputs: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customInputs")
  async disconnectCustomInputs(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: EventTypeCustomInputWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customInputs: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        allowDynamicBooking: true,
        avatar: true,
        away: true,
        bio: true,
        bookings: true,
        brandColor: true,
        bufferTime: true,
        completedOnboarding: true,
        createdDate: true,
        darkBrandColor: true,
        defaultScheduleId: true,

        destinationCalendar: {
          select: {
            id: true,
          },
        },

        disableImpersonation: true,
        email: true,
        emailVerified: true,
        endTime: true,
        hideBranding: true,
        id: true,
        identityProvider: true,
        identityProviderId: true,
        invitedTo: true,
        locale: true,
        metadata: true,
        name: true,
        password: true,
        plan: true,
        role: true,
        startTime: true,
        theme: true,
        timeFormat: true,
        timeZone: true,
        trialEndsAt: true,
        twoFactorEnabled: true,
        twoFactorSecret: true,
        username: true,
        verified: true,
        weekStart: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  async connectUsers(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  async updateUsers(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  async disconnectUsers(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/webhooks")
  @ApiNestedQuery(WebhookFindManyArgs)
  async findWebhooks(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<Webhook[]> {
    const query = plainToClass(WebhookFindManyArgs, request.query);
    const results = await this.service.findWebhooks(params.id, {
      ...query,
      select: {
        active: true,

        appField: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        eventTriggers: true,

        eventType: {
          select: {
            id: true,
          },
        },

        id: true,
        payloadTemplate: true,
        secret: true,
        subscriberUrl: true,

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

  @common.Post("/:id/webhooks")
  async connectWebhooks(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/webhooks")
  async updateWebhooks(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/webhooks")
  async disconnectWebhooks(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WebhookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webhooks: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/workflows")
  @ApiNestedQuery(WorkflowsOnEventTypeFindManyArgs)
  async findWorkflows(
    @common.Req() request: Request,
    @common.Param() params: EventTypeWhereUniqueInput
  ): Promise<WorkflowsOnEventType[]> {
    const query = plainToClass(WorkflowsOnEventTypeFindManyArgs, request.query);
    const results = await this.service.findWorkflows(params.id, {
      ...query,
      select: {
        eventType: {
          select: {
            id: true,
          },
        },

        id: true,

        workflow: {
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

  @common.Post("/:id/workflows")
  async connectWorkflows(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WorkflowsOnEventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        connect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/workflows")
  async updateWorkflows(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WorkflowsOnEventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        set: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/workflows")
  async disconnectWorkflows(
    @common.Param() params: EventTypeWhereUniqueInput,
    @common.Body() body: WorkflowsOnEventTypeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      workflows: {
        disconnect: body,
      },
    };
    await this.service.updateEventType({
      where: params,
      data,
      select: { id: true },
    });
  }
}
