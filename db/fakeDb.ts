const recipes = [
  {
    id: '1',
    description: '된장국',
    title: '된장국',
    ratings: [1, 2, 3],
    user: {
      id: '1',
      name: '학생',
    },
  },
  {
    id: '2',
    description: '라면',
    title: '진진짜라',
    ratings: [5, 5, 5],
    user: {
      id: '2',
      name: '농심',
    },
  },
  {
    id: '3',
    description: '더블패티',
    title: '와퍼',
    ratings: [1, 2, 5],
    user: {
      id: '3',
      name: '버거킹',
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
