const initialGrid = [];
for (let index = 0; index < 15; index++) {
  initialGrid.push([]);
}
for (let index = 0; index < 15; index++) {
  for (let count = 0; count < 25; count++) {
    initialGrid[index].push('grey');
  }
}
export default {
  fieldWidth: 300,
  fieldHeight: 660,
  blockUnit: 30,
  shapesMapping: [
    'straight',
    'square',
    'cross',
    'leftGun',
    'rightGun',
    'leftSnake',
    'rightSnake',
  ],
  tetrominos: {
    straight: {
      shape: [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      //   red
      color: '#FF0000',
    },
    square: {
      shape: [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      //   blue
      color: '#3C53F4',
    },
    cross: {
      shape: [[0, 1, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      //   green
      color: '#16C309',
    },
    leftGun: {
      shape: [[0, 0, 1, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      //   orange
      color: '#FE8F18',
    },
    rightGun: {
      shape: [[1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      //   yellow
      color: '#FFFC13',
    },
    leftSnake: {
      shape: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      //  purple
      color: '#BE0DFF',
    },
    rightSnake: {
      shape: [[0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      //   brown.. now pink
      color: '#E80CB0',
    },
  },
  initialGrid,
};
