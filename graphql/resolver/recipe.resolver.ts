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
  Recipe: {
    user: (parent, args, context, info) => {
      if (parent.user) {
        return parent.user;
      }
      return { id: '4', name: 'none' };
    },
  },
};

export default resolvers;
