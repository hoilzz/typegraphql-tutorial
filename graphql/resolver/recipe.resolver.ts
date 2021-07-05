import * as fakeDb from '../../db/fakeDb';

const resolvers = {
  Query: {
    recipes: async (parent, args, context, info) => {
      let recipes = await fakeDb.getRecipes();
      if (args.title) {
        recipes = recipes.filter((recipe) => recipe.title === args.title);
      }
      return recipes.slice(args.startIndex, args.endIndex);
    },
  },
};

export default resolvers;
