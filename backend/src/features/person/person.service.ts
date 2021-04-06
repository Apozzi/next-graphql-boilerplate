import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.model';

@Injectable()
export class PersonService {

  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}


  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async find(id: number): Promise<Person> {
    return this.personRepository.findOne({ where: { id } });
  }

  async create(person: any): Promise<Person> {
    return this.personRepository.save(person);
  }

  async update(id: number, person: any): Promise<Person> {
    const actualPerson = await this.personRepository.findOne({ where: { id } });
    if (actualPerson) {
      return this.personRepository.save({ ...actualPerson, ...person });
    }
  }

  async delete(id: number): Promise<Person> {
    const actualPerson = await this.personRepository.findOne({ where: { id } });
    if (actualPerson) {
      return this.personRepository.remove(actualPerson);
    }
  }
}
