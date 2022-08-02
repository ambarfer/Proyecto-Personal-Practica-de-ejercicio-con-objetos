//removeStringValuesLongerThan

//Escribe una función llamada removeStringValuesLongerThan.

//Dado un número y un objeto, removeStringValuesLongerThan elimina cualquier propiedad
//en el objeto dado cuyos valores son cadenas de texto más largas que el número dado.
//Ejemplo de entrada:
//const obj = {
//name: 'Montana',
//age: 20,
//location: 'Texas',
//};

//removeStringValuesLongerThan(6, obj);
//console.log(obj); // => { age: 20, location: 'Texas' }

function removeStringValuesLongerThan(numero, objeto) {
  for (let [key, value] of Object.entries(objeto)) {
    let resultado = value.toString();
    console.log(resultado);
    if (resultado.length < numero) {
      console.log(resultado.length);
      document.write(`${resultado} <br>`);
    }
  }
  document.write("<br>");
}

let objeto = {
  nombre: "Ri",
  edad: 25,
  tieneMascotas: true,
};
removeStringValuesLongerThan(3, objeto);

let objeto2 = {
  marca: "Kia",
  modelo: "xjaRio",
  color: "amarillo",
};
removeStringValuesLongerThan(6, objeto2);

let objeto3 = {
  raza: "labrador",
  color: "marron",
  nombre: "sam",
  edad: 3,
};
removeStringValuesLongerThan(7, objeto3);
