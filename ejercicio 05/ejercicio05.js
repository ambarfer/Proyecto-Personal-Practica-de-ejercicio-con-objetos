// addFullNameProperty

// Escribe una función llamada addFullNameProperty(person).

// Dado un objeto person con una propiedad firstName y una propiedad lastName,
//addFullNameProperty(person) debe retornar un nuevo objeto con las mismas propiedades
//que el objeto recibido pero con una propiedad más fullName,
//cuyo valor debe ser una cadena (string) con el nombre y el apellido separados por un espacio.

// const person = {
//   firstName: 'Jade',
//   lastName: 'Smith',
// };
// const personWithFullName = addFullNameProperty(person);
// console.log(personWithFullName.fullName); // => 'Jade Smith'
// console.log(personWithFullName.firstName); // => 'Jade'
// console.log(personWithFullName.lastName); // => 'Smith'

function addFullNameProperty(objeto) {
  //retornar nuevo objeto con lo anterior mas la nueva propiedad: fullname : rocio fernandez
  objeto["fullName"] = `${objeto["nombre"]} ${objeto["apellido"]}`;
  document.write(`${objeto["fullName"]}`);
  return objeto;
}

let person = {
  nombre: "Rocio",
  apellido: "Fernandez",
};
const personWithFullName = addFullNameProperty(person);
console.log(personWithFullName.fullName);
console.log(personWithFullName.nombre);
console.log(personWithFullName.apellido);
