//addArrayProperty
//Escribe una función llamada addArrayProperty(obj, key, array).

//Dado un objeto, una llave y un array, addArrayProperty asigna una nueva propiedad sobre el objeto en la lave dada, con el array dado como valor.
//Ejemplo de entrada:
//const myObj = {};
//const myStr = 'myProperty';
//const myArray = [1, 3];
//addArrayProperty(myObj, myStr, myArray);
//console.log(myObj.myProperty); // => [1, 3]

function addArrayProperty(objeto, nuevoPara, array) {
  objeto[nuevoPara] = array;
  console.log(objeto);
  document.write(`${array} <br><br>`);
}

let objeto = {
  nombre: "Sam",
  edad: 25,
  tieneMascotas: true,
};
let myStr = "colorFavorito";
let nuevoArreglo = ["azul", "rojo"];
addArrayProperty(objeto, myStr, nuevoArreglo);

let objeto2 = {
  marca: "Kia",
  modelo: "xjaRio",
};
let myStr2 = "Estilo";
let nuevoArreglo2 = ["air", "Pro-XAS"];
addArrayProperty(objeto2, myStr2, nuevoArreglo2);

let objeto3 = {
  raza: "labrador",
  color: "marron",
};
let myStr3 = "nombre";
let nuevoArreglo3 = ["Pablo", "Max"];
addArrayProperty(objeto3, myStr3, nuevoArreglo3);
