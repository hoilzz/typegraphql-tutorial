import { Query, Resolver } from 'type-graphql';
import { Library } from '../typedefs/library';

const libraries = [
  {
    branch: 'downtown',
  },
  {
    branch: 'riverside',
  },
  {
    branch: 'hoilzz',
  },
];

// The branch field of a book indicates which library has it in stock
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    branch: 'riverside',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    branch: 'downtown',
  },
];

// 우리가 리졸브하려는 타입 선언
@Resolver(() => Library)
class LibraryResolver {
  @Query((returns) => [Library])
  libraries() {
    return libraries;
  }
}

export default LibraryResolver;
