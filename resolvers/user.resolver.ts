import { Query, Resolver } from 'type-graphql';
import User from '../typedefs/user.interface';

@Resolver()
class UserResolver {
  @Query(() => User)
  user() {
    return { id: '1', name: 'seoul' };
  }
}

export default UserResolver;
