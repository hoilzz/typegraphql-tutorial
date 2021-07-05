import { Field, Float, ID, Int, ObjectType } from 'type-graphql';
import User from './user';

@ObjectType()
class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => [Int], { nullable: true })
  ratings?: number[];

  @Field(() => User, { description: '레시피 주인', nullable: true })
  user?: User;
}

export default Recipe;
