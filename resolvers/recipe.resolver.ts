import { Max, Min } from 'class-validator';
import {
  Arg,
  Args,
  ArgsType,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
  ResolverInterface,
  Root,
} from 'type-graphql';
import Recipe from '../typedefs/recipe.type';
import * as fakeDb from '../db/fakeDb';
import User from '../typedefs/user.interface';

@ArgsType()
export class GetRecipesArgs {
  @Field((type) => Int)
  @Min(0)
  start = 0;

  @Field((type) => Int, { nullable: true })
  @Min(1)
  @Max(50)
  end = 25;

  @Field({ nullable: true })
  title?: string;
}

@InputType({ description: 'New recipe data' })
export class AddRecipeInput implements Partial<Recipe> {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}

@Resolver(() => Recipe)
class RecipeResolver implements ResolverInterface<Recipe> {
  @Query(() => [Recipe])
  async recipes(
    @Args() { title, start, end }: GetRecipesArgs
  ): Promise<Recipe[]> {
    let recipes = await fakeDb.getRecipes();
    if (title) {
      recipes = recipes.filter((recipe) => recipe.title === title);
    }
    return recipes.slice(start, end);
  }

  @FieldResolver()
  user(@Root() recipe: Recipe) {
    if (recipe.user) {
      return recipe.user;
    }
    return { id: '4', name: 'none' };
  }

  @Mutation(() => Recipe)
  addRecipe(
    @Arg('data') newReciptData: AddRecipeInput,
    @Ctx() ctx: User
  ): Recipe {
    const recipe: Recipe = {
      id: '100',
      ...newReciptData,
    };
    return recipe;
  }
}

export default RecipeResolver;
