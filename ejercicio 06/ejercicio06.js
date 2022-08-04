// transformFirstAndLast

// Escribe una función transformFirstAndLast que toma un array y devuelve un objeto con:

// el primer elemento del array como la llave del objeto, y
// el último elemento del array como valor de esa llave.
// Ejemplo de entrada:

// ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
// Valor de retorno de la función (salida):

// {
//   Queen: 'Beyonce'
// }
// No cambies el array de entrada. Piensa que todos los elementos del array de entrada serán del tipo string.

// Ten en cuenta que el array de entrada puede tener un número variable de elementos. Tu código debería acomodarse de manera flexible.

// Ejemplo, debe manejar la entrada como:

// ['Kevin', 'Bacon', 'Amor', 'Hart', 'Costner', 'Spacey']
// Valor de retorno de la función (salida):

// {
//   Kevin: "Spacey"
// }

function transformFirstAndLast(cosa) {
  let propiedad = cosa[0];
  let atributo = cosa[cosa.length - 1];
  let objeto = {
    [propiedad]: atributo,
  };
  document.write(`El nuevo objeto es ${JSON.stringify(objeto)} <br>`);

  console.log(propiedad);
  console.log(atributo);
  console.log(objeto);
}

let arreglo1 = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];
transformFirstAndLast(arreglo1);

let arreglo2 = ["Kevin", "Bacon", "Amor", "Hart", "Costner", "Spacey"];
transformFirstAndLast(arreglo2);
