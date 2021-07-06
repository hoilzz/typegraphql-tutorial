import { ObjectType } from 'type-graphql';
import User from './user.interface';
@ObjectType({ implements: User })
class Student extends User {}
