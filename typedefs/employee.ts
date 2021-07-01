import { ObjectType } from 'type-graphql';
import User, { UserType } from './user';

// @ObjectType({ implements: UserType })
@ObjectType()
class Employee extends UserType {}

export default Employee;
