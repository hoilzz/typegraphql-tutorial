import { Field, Float, ID, Int, ObjectType } from 'type-graphql';
import Rate from './rate';
import User, { UserType } from './user';

/**
 * TS 클래스로 스키마 정의 자동 생성해줌
 * 스키마 정의 파일과 스키마를 설명하는 인터페이스 파일 생성안하려고
 * 데코레이터와 reflection? magic을 이용할거임
 **/
console.log('recipe');
@ObjectType({ description: 'The recipe model' })
class Recipe {
  @Field(() => ID)
  id: string;

  @Field({ description: 'The title of the recipe' })
  title: string;

  @Field(() => [Int])
  ratings?: number[];

  @Field({ nullable: true })
  averageRating?: number;

  @Field(() => User)
  user?: User;
}

export default Recipe;
