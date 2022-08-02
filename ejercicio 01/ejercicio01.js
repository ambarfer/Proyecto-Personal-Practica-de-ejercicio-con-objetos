//Contador de propiedades
//Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene y retornarlo.

//Ejemplo:
//const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });
//console.log(ouput); // => 2

function contarParametro(objetos) {
  let arreglo = Object.keys(objetos).length;
  document.write(`El arreglo tiene ${arreglo} propiedades <br><br>`);
}

let objeto = {
  nombre: "Sam",
  edad: 25,
  tieneMascotas: true,
};
contarParametro(objeto);

let objeto2 = {
  nombre: "rocio",
  edad: 28,
  tieneMascotas: true,
  color: "azul",
};
contarParametro(objeto2);

let objeto3 = {
  marca: "kia",
  modelo: "xea",
};
contarParametro(objeto3);
