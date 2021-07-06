const resolvers = {
  User: {
    __resolveType: (obj, context, info) => {
      if (obj.name === '학생') {
        return 'Student';
      }
      return 'Company';
    },
  },
};
