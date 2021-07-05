import { Query, Resolver } from 'type-graphql';
import FooBar from '../typedefs/test';

@Resolver()
class TestResolver {
  @Query(() => FooBar)
  foobar() {
    return { iFooBarField: { fooBarKind: 'Foo' } };
  }
}

export default TestResolver;
