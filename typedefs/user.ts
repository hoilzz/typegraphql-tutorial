import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
class User {
  @Field()
  id: string;

  @Field()
  name?: string;
}

export default User;
