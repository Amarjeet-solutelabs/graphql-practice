import { Student } from './entities/student.entity';
import { Resolver,Query } from '@nestjs/graphql';

@Resolver(()=> Student)
export class StudentResolver {

    @Query(()=> Student)
    findAll(){

    }
}
