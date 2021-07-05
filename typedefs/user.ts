import { Field, ID, InterfaceType, ObjectType } from 'type-graphql';

@InterfaceType({
  resolveType: (value) => {
    if (value.name === '학생') {
      return 'Student';
    }
    return 'Company';
  },
})
abstract class User {
  @Field(() => ID!)
  id: string;

  @Field()
  name?: string;
}

@ObjectType({ implements: User })
class Student extends User {}

@ObjectType({ implements: User })
class Company extends User {}

export default User;
