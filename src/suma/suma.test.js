// prueba suma
const suma = require('./suma');

//test  case 1
test('suma 7 + 2 es igual a 9', () => {
  expect(suma(7, 2)).toBe(9);
});

//test  case 2
test('suma 8 + 8 es igual a 16', () => {
  expect(suma(8, 8)).toBe(16);
});

//test case 3
test('suma 0 + 0 es igual a 0', () => {
  expect(suma(0, 0)).toBe(0);
});

//test  case 4
test('suma 3 + 5 es igual a 8', () => {
  expect(suma(3, 5)).toBe(8);
});