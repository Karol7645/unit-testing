// division.js

/**
 * Función que realiza la división de dos números.
 * @param {number} a - Dividendo.
 * @param {number} b - Divisor.
 * @returns {number} - Resultado de la división.
 */
function division(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
  
    return a / b;
  }
  
  module.exports = division;
  