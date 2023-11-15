// pruebas multiplicar
const multiplicar = require('./multiplicacion');

// Test case 1
test('Multiplicación de 2 y 3 debe ser 6', () => {
  expect(multiplicar(2, 3)).toBe(6);
});

// Test case 2
test('Multiplicación de 0 y 5 debe ser 0', () => {
  expect(multiplicar(0, 5)).toBe(0);
});
