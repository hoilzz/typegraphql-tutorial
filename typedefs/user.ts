import { Field, ID, InterfaceType, ObjectType } from 'type-graphql';

@InterfaceType({
  resolveType: (value) => {
    console.log('valuie: ', value.constructor.name);
    if (value.name === 'seoul') {
      return 'Student';
    }
    return 'Employee';
  },
})
abstract class User {
  @Field(() => ID!)
  id: string;

  @Field()
  name?: string;
}
console.log('in User: ', User);

@ObjectType({ implements: User })
export class UserType implements User {
  id: string;
  name?: string;
}
console.log('in UserType: ', UserType);

export default User;
