import {
  Field,
  InterfaceType,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';

@InterfaceType({
  resolveType: (value) => {
    if (value.fooBarKind === 'Foo') {
      return Foo;
    }
    return 'Bar';
  },
})
abstract class IFooBar {
  @Field(() => String)
  fooBarKind: string;
}
@ObjectType({ implements: IFooBar })
class Foo implements IFooBar {
  fooBarKind: string;
}
@ObjectType({ implements: IFooBar })
class Bar implements IFooBar {
  fooBarKind: string;
}
@ObjectType()
class FooBar {
  @Field(() => IFooBar)
  iFooBarField: IFooBar;
}

export default FooBar;
