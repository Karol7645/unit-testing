// pruebas resta
const restar = require('./resta');

// test case 1
test('Resta de 5 y 3 debe ser 2', () => {
  expect(restar(5, 3)).toBe(2);
});

// test case 2
test('Resta de 10 y 7 debe ser 3', () => {
  expect(restar(10, 7)).toBe(3);
});

// test case 3
test('Resta de 20 y 15 debe ser 5', () => {
  expect(restar(20, 15)).toBe(5);
});
