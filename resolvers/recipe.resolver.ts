import { Max, Min } from 'class-validator';
import {
  Arg,
  Args,
  ArgsType,
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
import { FileWatcherEventKind } from 'typescript';
import Recipe from '../typedefs/recipe';
import * as fakeDb from '../db/fakeDb';
import User from '../typedefs/user';

@ArgsType()
export class GetRecipesArgs {
  @Field((type) => Int)
  @Min(0)
  skip = 0;

  @Field((type) => Int, { nullable: true })
  @Min(1)
  @Max(50)
  take = 25;

  @Field({ nullable: true })
  title?: string;

  // helpers - index calculation
  get startIndex(): number {
    return this.skip;
  }

  get endIndex(): number {
    return this.skip + this.take;
  }
}

@InputType({ description: 'New recipe data' })
export class AddRecipeInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}

@Resolver((of) => Recipe)
class RecipeResolver implements ResolverInterface<Recipe> {
  // private recipesCollection: Recipe[] = [];
  @Query((returns) => [Recipe])
  async recipes(
    @Args() { endIndex, title, startIndex }: GetRecipesArgs
  ): Promise<Recipe[]> {
    let recipes = await fakeDb.getRecipes();
    if (title) {
      recipes = recipes.filter((recipe) => recipe.title === title);
    }
    return recipes.slice(startIndex, endIndex);
  }

  @Mutation()
  addRecipe(@Arg('data') newRecipeData: AddRecipeInput): Recipe {
    const recipe: Recipe = {
      id: 'asd',
      // ratings: [],
      title: 'title',
    };
    return recipe;
    // sample implementation
    // const recipe = RecipesUtils.create(newRecipeData, ctx.user);
    // this.recipesCollection.push(recipe);
    // return recipe;
  }

  @FieldResolver()
  averageRating(@Root() recipe: Recipe) {
    return recipe.ratings.length
      ? recipe.ratings.reduce((a, rate) => a + rate, 0) / recipe.ratings.length
      : null;
  }

  @FieldResolver()
  user(@Root() recipe: Recipe): User {
    if (recipe.user) {
      return recipe.user;
    }
    return { id: '4', name: 'none' };
  }
}

export default RecipeResolver;
