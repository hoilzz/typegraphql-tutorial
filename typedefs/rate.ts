import { Field, ID, ObjectType } from 'type-graphql';
import User from './user';

@ObjectType()
class Rate {
  // @Field()
  // value: number;

  // @Field()
  // date: Date;

  @Field(() => ID!)
  recipeId: string;

  // user: User;
}

export default Rate;
