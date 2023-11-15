// pruebas division
const division = require('./division');

// Test 1: División de números positivos
test('División de 8 por 2 debería ser 4', () => {
  expect(division(8, 2)).toBe(4);
});

// Test 2: División de números negativos
test('División de -10 por -2 debería ser 5', () => {
  expect(division(-10, -2)).toBe(5);
});

// Test 3: División por cero debería lanzar un error
test('División por cero debería lanzar un error', () => {
  expect(() => division(5, 0)).toThrow('No se puede dividir por cero');
});

// Test 4: División de cero por un número distinto de cero
test('División de 0 por 7 debería ser 0', () => {
  expect(division(0, 7)).toBe(0);
});
