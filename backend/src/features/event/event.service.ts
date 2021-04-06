import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.model';

@Injectable()
export class EventService {

  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}


  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  async find(id: number): Promise<Event> {
    return this.eventRepository.findOne({ where: { id } });
  }

  async create(event: any): Promise<Event> {
    return this.eventRepository.save(event);
  }

  async update(id: number, event: any): Promise<Event> {
    const actualEvent = await this.eventRepository.findOne({ where: { id } });
    if (actualEvent) {
      return this.eventRepository.save({ ...actualEvent, ...event });
    }
  }

  async delete(id: number): Promise<Event> {
    const actualEvent = await this.eventRepository.findOne({ where: { id } });
    if (actualEvent) {
      return this.eventRepository.remove(actualEvent);
    }
  }
}
