import { Field, ID, Int, ObjectType } from 'type-graphql';
import Rate from './rate';

// `type Recipe {
//   id: string;
//   title: string;
//   ratings: Rate[];
//   averageRating?: number;
// }`;

/**
 * TS 클래스로 스키마 정의 자동 생성해줌
 * 스키마 정의 파일과 스키마를 설명하는 인터페이스 파일 생성안하려고
 * 데코레이터와 reflection? magic을 이용할거임
 **/

@ObjectType({ description: 'The recipe model' })
class Recipe {
  @Field((type) => ID)
  id: string;

  @Field({ description: 'The title of the recipe' })
  title: string;

  @Field((type) => [Int])
  ratings?: number[];

  @Field({ nullable: true })
  averageRating?: number;
}

export default Recipe;
