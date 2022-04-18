import { StudentModule } from './student/student.module';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import {GraphQLModule} from '@nestjs/graphql'
import { Module } from '@nestjs/common';
import { ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [StudentModule,
      GraphQLModule.forRoot({
        driver:ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
        debug: true,
        playground: true,
      }),
      
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Amarjeet@315',
        database: 'student',
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
