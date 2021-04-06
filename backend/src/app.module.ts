import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './features/event/event.module';
import { PersonModule } from './features/person/person.module';
import { AuthModule } from './features/auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req })  
    }),
    TypeOrmModule.forRoot(),
    EventModule,
    PersonModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
