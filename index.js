/**
 * Determina si un número entero es primo.
 *
 * Un número primo es un entero mayor que 1 que solo es divisible
 * entre 1 y sí mismo.
 *
 * @param {number} num Número a evaluar.
 * @returns {boolean} `true` si es primo; `false` en cualquier otro caso.
 */
function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  // Los números pares mayores que 2 no son primos.
  if (num % 2 === 0) {
    return false;
  }

  // Solo hace falta buscar divisores impares hasta la raíz cuadrada.
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = { isPrime };
