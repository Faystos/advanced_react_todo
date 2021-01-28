const lists = [
  {
    "id": 1,
    "name": "Продажи",
    "colorId": 5
  },
  {
    "id": 2,
    "name": "Фронтенд",
    "colorId": 4
  },
  {
    "id": 3,
    "name": "Фильмы и сериалы",
    "colorId": 3
  },
  {
    "id": 4,
    "name": "Книги",
    "colorId": 2
  },
  {
    "id": 5,
    "name": "Личное",
    "colorId": 1
  },
  {
    "name": "Спорт",
    "colorId": 3,
    "id": 6
  },
  {
    "name": "Курс по ReactJS ToDo",
    "colorId": 7,
    "id": 7
  }
];

const tasks = [
  {
    "id": 1,
    "listId": 2,
    "text": "Изучить JavaScript",
    "completed": true
  },
  {
    "id": 2,
    "listId": 2,
    "text": "Изучить паттерны проектирования",
    "completed": false
  },
  {
    "id": 3,
    "listId": 2,
    "text": "ReactJS Hooks (useState, useReducer, useEffect и т.д.)",
    "completed": true
  },
  {
    "id": 4,
    "listId": 2,
    "text": "Redux (redux-observable, redux-saga)",
    "completed": false
  },
  {
    "listId": 2,
    "text": "123",
    "completed": true,
    "id": 5
  },
  {
    "listId": 1,
    "text": "test",
    "completed": false,
    "id": 6
  },
  {
    "listId": 1,
    "text": "qweqwe",
    "completed": false,
    "id": 7
  },
  {
    "listId": 1,
    "text": "qweqwe",
    "completed": true,
    "id": 8
  },
  {
    "listId": 1,
    "text": "123",
    "completed": false,
    "id": 9
  },
  {
    "listId": 4,
    "text": "Купить 1984!",
    "completed": true,
    "id": 10
  },
  {
    "listId": 2,
    "text": "222",
    "completed": true,
    "id": 12
  },
  {
    "listId": 7,
    "text": "Сделали сайдбар",
    "completed": true,
    "id": 15
  },
  {
    "listId": 7,
    "text": "Сделали список задач",
    "completed": true,
    "id": 16
  },
  {
    "listId": 7,
    "text": "Сделали удаление и редактирование задач и списков",
    "completed": true,
    "id": 17
  },
  {
    "listId": 8,
    "text": "tttt",
    "completed": false,
    "id": 18
  }
];

const colors = [
  {
    "id": 1,
    "hex": "#C9D1D3",
    "name": "grey"
  },
  {
    "id": 2,
    "hex": "#42B883",
    "name": "green"
  },
  {
    "id": 3,
    "hex": "#64C4ED",
    "name": "blue"
  },
  {
    "id": 4,
    "hex": "#FFBBCC",
    "name": "pink"
  },
  {
    "id": 5,
    "hex": "#B6E6BD",
    "name": "lime"
  },
  {
    "id": 6,
    "hex": "#C355F5",
    "name": "purple"
  },
  {
    "id": 7,
    "hex": "#110133",
    "name": "black"
  },
  {
    "id": 8,
    "hex": "#FF6464",
    "name": "red"
  }
];

export {lists, tasks, colors};