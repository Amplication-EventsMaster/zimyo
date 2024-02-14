/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  DestinationCalendar, // @ts-ignore
  Credential, // @ts-ignore
  EventType, // @ts-ignore
  User,
} from "@prisma/client";

export class DestinationCalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DestinationCalendarCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarCountArgs>
  ): Promise<number> {
    return this.prisma.destinationCalendar.count(args);
  }

  async destinationCalendars<T extends Prisma.DestinationCalendarFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarFindManyArgs>
  ): Promise<DestinationCalendar[]> {
    return this.prisma.destinationCalendar.findMany(args);
  }
  async destinationCalendar<T extends Prisma.DestinationCalendarFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarFindUniqueArgs>
  ): Promise<DestinationCalendar | null> {
    return this.prisma.destinationCalendar.findUnique(args);
  }
  async createDestinationCalendar<
    T extends Prisma.DestinationCalendarCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarCreateArgs>
  ): Promise<DestinationCalendar> {
    return this.prisma.destinationCalendar.create<T>(args);
  }
  async updateDestinationCalendar<
    T extends Prisma.DestinationCalendarUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarUpdateArgs>
  ): Promise<DestinationCalendar> {
    return this.prisma.destinationCalendar.update<T>(args);
  }
  async deleteDestinationCalendar<
    T extends Prisma.DestinationCalendarDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.DestinationCalendarDeleteArgs>
  ): Promise<DestinationCalendar> {
    return this.prisma.destinationCalendar.delete(args);
  }

  async getCredential(parentId: number): Promise<Credential | null> {
    return this.prisma.destinationCalendar
      .findUnique({
        where: { id: parentId },
      })
      .credential();
  }

  async getEventType(parentId: number): Promise<EventType | null> {
    return this.prisma.destinationCalendar
      .findUnique({
        where: { id: parentId },
      })
      .eventType();
  }

  async getUser(parentId: number): Promise<User | null> {
    return this.prisma.destinationCalendar
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
