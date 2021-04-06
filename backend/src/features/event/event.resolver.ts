import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/commons/guards/auth.guard';
import { Event } from './event.model';
import { EventService } from './event.service';

@Resolver('Event')
@UseGuards(AuthGuard)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query('events')
  async getEvents(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Query('event')
  async getEvent(@Args('id') id: number): Promise<Event> {
    return this.eventService.find(id);
  }

  @Mutation('createEvent') 
  async createEvent(@Args('event') event: any): Promise<Event> {
      return this.eventService.create(event);
  }

  @Mutation('updateEvent') 
  async updateEvent(@Args('event') event: any): Promise<Event> {
      return this.eventService.update(event.id, event);
  }

  @Mutation('deleteEvent') 
  async deleteEvent(@Args('id') id: number): Promise<number> {
      return this.eventService.delete(id) ? id : null;
  }

  @Mutation('addGuest') 
  async addGuest(@Args('personId') personId: any): Promise<Event> {
      return null;
  }
}
