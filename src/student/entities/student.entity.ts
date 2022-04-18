import { Field,ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {
    @Field()
    id:string;
    @Field()
    firstName:string;
    @Field()
    lastName:string;
    @Field()
    branch:string;
    @Field({nullable:true})
    city:string;
}