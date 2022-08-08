// fromListToObject

// Escribe una función fromListToObject que toma un array de matrices, y devuelve un objeto con cada par de elementos en la array
//como un par llave-valor.

// Ejemplo de entrada:
// [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
// Valor de retorno de la función (salida):

// {
//   make: 'Ford'
//   model: 'Mustang',
//   year: 1964
// }

// No cambies la cadena de entrada. Piensa que todos los elementos del array serán del tipo string.
// Ten en cuenta que la entrada puede tener un número diferente de elementos que la muestra dada.
//Por ejemplo, si la entrada tiene 6 valores en lugar de 4, tu código debería adaptarse de manera flexible.

function fromListToObject(cosa) {
  // let propiedad = cosa[0];
  // let atributo = cosa[cosa.length - 1];
  // let objeto = {
  //   [propiedad]: atributo,
  // };
  // document.write(`El nuevo objeto es ${JSON.stringify(objeto)} <br>`);

  // console.log(propiedad);
  // console.log(atributo);
  // console.log(objeto);
  let atributo;
  let propiedad;
  let objetoFinal = {};

  for (i = 0; i < cosa.length; i++) {
    propiedad = cosa[i][0];
    atributo = cosa[i][1];
    objetoFinal[propiedad] = atributo;
  }
  return objetoFinal;
}

let arreglo1 = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
];
let resultado = fromListToObject(arreglo1);
document.write(`El objeto es ${JSON.stringify(resultado)} <br>`);

let arreglo2 = [
  ["Nombre", "Bacon"],
  ["hobbie", "cantar"],
];
let resultado2 = fromListToObject(arreglo2);
document.write(`El objeto es ${JSON.stringify(resultado2)} <br>`);
