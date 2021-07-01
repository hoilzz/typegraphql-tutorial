const recipes = [
  {
    id: '1',
    description: 'Desc 1',
    title: 'Recipe 1',
    ratings: [1, 2, 3],
    creationDate: new Date('2018-04-11'),
    user: {
      id: '1',
      name: 'google',
    },
  },
  {
    id: '2',
    description: 'Desc 2',
    title: 'Recipe 2',
    ratings: [5, 5, 5],
    creationDate: new Date('2018-04-15'),
    user: {
      id: '2',
      name: 'naver',
    },
  },
  {
    id: '3',
    description: 'Desc 3',
    title: 'Recipe 3',
    ratings: [1, 2, 5],
    creationDate: new Date(),
    user: {
      id: '3',
      name: 'seoul',
    },
  },
];

export function getRecipes() {
  return recipes;
}

const users = [
  {
    id: '1',
    name: 'google',
  },
  {
    id: '2',
    name: 'naver',
  },
  {
    id: '3',
    name: 'seoul',
  },
];

export function getUsers() {
  return users;
}
