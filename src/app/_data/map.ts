export const MAP_DEFAULT = {
  nodes: [
    {
      name: 'Старт',
      r: 55,
      fontSize: 20,
      color: 'green'
    },
    {
      name: 'Математика',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Математика 1',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Математика 2',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Математика 3',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Математика 4',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Математика 5',
      r: 22,
      fontSize: 20,
      color: 'blue'
    },
    {
      name: 'Алгебра',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
    {
      name: 'Геометрия',
      r: 42,
      fontSize: 20,
      color: 'red'
    },
  ],
  links: [
    {
      source: 'Старт',
      target: 'Математика'
    },
    {
      source: 'Математика',
      target: 'Математика 1'
    },
    {
      source: 'Математика 1',
      target: 'Математика 2'
    },
    {
      source: 'Математика 2',
      target: 'Математика 3'
    },
    {
      source: 'Математика 3',
      target: 'Математика 4'
    },
    {
      source: 'Математика 4',
      target: 'Математика 5'
    },
    {
      source: 'Математика 5',
      target: 'Алгебра'
    },
    {
      source: 'Математика 5',
      target: 'Геометрия'
    },
  ]
};
