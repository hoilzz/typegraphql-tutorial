// 무조건 맨위
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import * as path from 'path';
import User, { UserType } from './typedefs/user';
import Student from './typedefs/student';
import Employee from './typedefs/employee';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/*.resolver.{ts,js}'],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    orphanedTypes: [Student, Employee, User, UserType],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  const { url } = await server.listen(8008);
  console.log('server is running 8008, http://localhost:8008');
  // other initialization code, like creating http server
}

bootstrap(); // actually run the async function
