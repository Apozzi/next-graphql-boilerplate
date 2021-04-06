import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from 'src/commons/guards/auth.guard';
import { Person } from './person.model';
import { PersonService } from './person.service';

@Resolver('Person')
@UseGuards(AuthGuard)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query('people')
  async getPeople(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Query('person')
  async getPerson(@Args('id') id: number): Promise<Person> {
    return this.personService.find(id);
  }

  @Mutation('createPerson') 
  async createPerson(@Args('person') person: any): Promise<Person> {
      return this.personService.create(person);
  }

  @Mutation('updatePerson') 
  async updatePerson(@Args('person') person: any): Promise<Person> {
      return this.personService.update(person.id, person);
  }

  @Mutation('deletePerson') 
  async deletePerson(@Args('id') id: number): Promise<number> {
      return this.personService.delete(id) ? id : null;
  }
}
