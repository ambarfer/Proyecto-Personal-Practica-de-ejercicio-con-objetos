function botonAdd() {
  let name = document.getElementsByClassName("form__name")[0].value;
  let hours = parseInt(document.getElementsByClassName("form__hours")[0].value);
  let nombre = hours <= 1 ? "hour" : "hours"; //buscar sobre operardor ternario en javascript --> 1 =hour / 1 < hours
  if (name == "" || hours == "") {
    window.alert("You should insert a name and hour!");
  } else {
    if (isNaN(hours) != false) {
      //hacer que hours sea numerico
      window.alert("Debe ingresar un número");
    } else {
      document.getElementById(
        "contenedor"
      ).innerHTML += `<div class="respuesta">
          ${name} (${hours} ${nombre})
            <button type="button" class="boton_eliminar" onclick="botonEliminar(this)"> <i class="fa fa-trash-o" aria-hidden="true"></i></button>
            <button type="button" class="boton_editar" onclick="botonEditar(this)"> <i class="fa fa-pencil" aria-hidden="true"></i></button>
          </div>`;
    }
  }
}

function botonEliminar(elemento) {
  elemento.parentNode.remove();
}

let copiaTexto = document.getElementsByClassName("respuesta");

function botonEditar(datos) {
  let texto = datos.parentNode.innerText;
  let hora = texto.match(/\d+/)[0];
  let nombre = texto.split("(")[0];

  document.getElementsByClassName("form__name")[0].value = nombre;
  document.getElementsByClassName("form__hours")[0].value = hora;
  document.getElementsByClassName("boton_guardar")[0].removeAttribute("style");
  document
    .getElementsByClassName("boton_add")[0]
    .setAttribute("style", "display:none");

  copiaTexto = texto;
}

function botonGuardar() {
  let name = document.getElementsByClassName("form__name")[0].value;
  let hours = parseInt(document.getElementsByClassName("form__hours")[0].value);
  let nombre = hours <= 1 ? "hour" : "hours"; //buscar sobre operardor ternario en javascript --> 1 =hour / 1 < hours
  let arreglo = document.getElementsByClassName("respuesta");

  if (name == "" || hours == "") {
    window.alert("You should insert a name and hour!");
  } else {
    if (isNaN(hours) != false) {
      window.alert("Debe ingresar un número");
    } else {
      for (i = 0; i < arreglo.length; i++) {
        arreglo[i].innerText;
        if (copiaTexto == arreglo[i].innerText) {
          arreglo[i].childNodes[0].nodeValue = `${name} (${hours} ${nombre})`;
          document.getElementsByClassName("form__name")[0].value = "";
          document.getElementsByClassName("form__hours")[0].value = "";
          document
            .getElementsByClassName("boton_guardar")[0]
            .setAttribute("style", "display:none");
          document
            .getElementsByClassName("boton_add")[0]
            .removeAttribute("style");
        }
      }
    }
  }
}
