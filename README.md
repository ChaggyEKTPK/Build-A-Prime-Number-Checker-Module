# Prime Number Checker

[![tests](https://github.com/ChaggyEKTPK/Build-A-Prime-Number-Checker-Module/actions/workflows/test.yml/badge.svg)](https://github.com/ChaggyEKTPK/Build-A-Prime-Number-Checker-Module/actions/workflows/test.yml)

Módulo de Node.js que determina si un número entero es primo.

## Uso

Clona el repositorio y ejecuta el módulo desde la raíz:

```bash
git clone git@github.com:ChaggyEKTPK/Build-A-Prime-Number-Checker-Module.git
cd Build-A-Prime-Number-Checker-Module
node -e "const { isPrime } = require('./index.js'); console.log(isPrime(97))"
```

También puedes usarlo desde otro archivo:

```js
const { isPrime } = require("./index.js");

isPrime(2);   // true
isPrime(17);  // true
isPrime(25);  // false
isPrime(1);   // false
isPrime(2.5); // false
```

## API

### `isPrime(num)`

Devuelve `true` si `num` es un número entero primo. Devuelve `false` para
cualquier otro valor: números menores que 2, compuestos, decimales, `NaN`,
`Infinity`, cadenas o valores nulos.

El algoritmo solo comprueba divisores impares hasta la raíz cuadrada del
número, por lo que es eficiente para valores grandes.

## Tests

```bash
npm test
```

Los tests usan el runner integrado de Node.js (`node:test`), sin dependencias
externas.

## Estructura

```text
.
├── index.js              # Implementación de isPrime
├── test/index.test.js    # Tests unitarios
├── .github/workflows/    # CI con GitHub Actions
├── LICENSE
└── README.md
```

## Autor

Diego Alejandro Aguilar López — [@ChaggyEKTPK](https://github.com/ChaggyEKTPK)

Licencia MIT.
