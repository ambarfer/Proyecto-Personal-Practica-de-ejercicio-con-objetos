// getSumOfAllElementsAtProperty
// Escribe una función llamada getSumOfAllElementsAtProperty.

// Dado un objeto y una key, getSumOfAllElementsAtProperty devuelve la suma de todos
//los elementos del array.

// Notas:
// Si el array está vacío, debe devolver 0.
// Si la propiedad en la key dada no es un array, debe devolver 0.
// Si no hay ninguna propiedad en la key dada, debe devolver 0.
// const obj = {
//   key: [4, 1, 8],
// };
// const output = getSumOfAllElementsAtProperty(obj, 'key');
// console.log(output); // => 13

function getSumOfAllElementsAtProperty(cosa, key) {
  let suma = 0;
  let arreglo = cosa[key];

  if (Array.isArray(arreglo) == false) {
    document.write(`La suma es 0 <br><br>`);
  } else {
    for (i = 0; i < arreglo.length; i++) {
      if (suma >= 0) {
        suma = suma + arreglo[i];
      } else {
        document.write(`La suma es 0 <br><br>`);
      }
    }
    document.write(`La suma final final es ${suma} <br><br>`);
  }
}

let objeto = {
  nombre: "Ri",
  edad: [25, 30, 12],
  tieneMascotas: true,
};
getSumOfAllElementsAtProperty(objeto, "edad");

let objeto2 = {
  cantidad: [1, 3, 6],
  marca: "Kia",
  modelo: "xjaRio",
  color: "amarillo",
};
getSumOfAllElementsAtProperty(objeto2, "cantidad");

let objeto3 = {
  raza: "labrador",
  color: "marron",
  nombre: "sam",
};
getSumOfAllElementsAtProperty(objeto3, "nombre");

let objeto4 = {
  raza: "labrador",
  color: "marron",
  edades: {},
};
getSumOfAllElementsAtProperty(objeto4, "edades");

let objeto5 = {
  raza: "labrador",
  color: "marron",
  edades: 25,
};
getSumOfAllElementsAtProperty(objeto5, "edades");
