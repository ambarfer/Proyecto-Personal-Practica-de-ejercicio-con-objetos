// listAllValues

// Escribe una función llamada listAllValues que devuelve
//un array de todos los valores del objeto de entrada.

// Ejemplo de entrada:
// {
//   name: 'Krysten',
//   age: 33,
//   hasPets: false
// }
// Valor de retorno de la función (salida):
// ['Krysten', 33, false]

// Ten en cuenta que la entrada puede tener un número diferente de llaves y valores que la muestra dada.
// Por ejemplo, también debe manejar una entrada como:

// {
//   a: 'a',
//   number: 11,
//   hungry: true,
//   grammyWins: 1
// }
// Valor de retorno de la función (salida):
// ['a', 11, true, 1]

function listAllValues(cosa) {
  let valor = Object.values(cosa);
  let array = [];
  for (let i = 0; i < valor.length; i++) {
    array.push(valor[i]);
  }
  return array;
}

let objeto = {
  name: "Krysten",
  age: 33,
  hasPets: false,
};
let resultado = listAllValues(objeto);
document.write(`El array con los valores del objeto es ${resultado}. <br>`);

let objeto2 = {
  a: "a",
  number: 11,
  hungry: true,
  grammyWins: 1,
};
let resultado2 = listAllValues(objeto2);
document.write(`El array con los valores del objeto es ${resultado2}. <br>`);
