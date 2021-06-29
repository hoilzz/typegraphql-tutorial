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
  Root,
} from 'type-graphql';
import { FileWatcherEventKind } from 'typescript';
import Recipe from '../typedefs/recipe';
import * as fakeDb from '../db/fakeDb';

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
class RecipeResolver {
  // private recipesCollection: Recipe[] = [];
  @Query((returns) => [Recipe])
  async recipes(@Args() { endIndex, title, startIndex }: GetRecipesArgs) {
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
}

export default RecipeResolver;
