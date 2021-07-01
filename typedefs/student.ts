import { ObjectType } from 'type-graphql';
import User, { UserType } from './user';
import Recipe from './recipe';

// @ObjectType({ implements: UserType })
@ObjectType()
class Student extends UserType {
  // id: string;
  // name?: string;
}

export default Student;
