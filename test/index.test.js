const test = require("node:test");
const assert = require("node:assert/strict");

const { isPrime } = require("../index.js");

test("devuelve false para números menores que 2", () => {
  for (const num of [-10, -1, 0, 1]) {
    assert.equal(isPrime(num), false, `${num} no es primo`);
  }
});

test("reconoce números primos", () => {
  for (const num of [2, 3, 5, 7, 11, 13, 97, 999_983]) {
    assert.equal(isPrime(num), true, `${num} es primo`);
  }
});

test("rechaza números compuestos", () => {
  for (const num of [4, 6, 8, 9, 15, 25, 49, 100, 1_000_000]) {
    assert.equal(isPrime(num), false, `${num} no es primo`);
  }
});

test("rechaza valores que no son enteros", () => {
  for (const num of [2.5, NaN, Infinity, -Infinity, "7", null, undefined, {}]) {
    assert.equal(isPrime(num), false, `${String(num)} no es un entero válido`);
  }
});
