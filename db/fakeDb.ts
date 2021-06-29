const recipes = [
  {
    id: '1',
    description: 'Desc 1',
    title: 'Recipe 1',
    ratings: [1, 2, 3],
    creationDate: new Date('2018-04-11'),
  },
  {
    id: '2',
    description: 'Desc 2',
    title: 'Recipe 2',
    ratings: [5, 5, 5],
    creationDate: new Date('2018-04-15'),
  },
  {
    id: '3',
    description: 'Desc 3',
    title: 'Recipe 3',
    ratings: [1, 2, 5],
    creationDate: new Date(),
  },
];

export function getRecipes() {
  return recipes;
}
