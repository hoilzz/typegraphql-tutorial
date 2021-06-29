import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Library {
  @Field()
  branch: string;

  @Field(() => [Book])
  books: Book[];
}

@ObjectType()
class Book {
  // @Field()
  // branch: string;

  @Field()
  title?: string;

  @Field()
  author: string;
}

export { Library, Book };
