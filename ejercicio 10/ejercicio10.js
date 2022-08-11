function botonAdd() {
  let name = document.getElementsByClassName("form__name")[0].value;
  let hours = parseInt(document.getElementsByClassName("form__hours")[0].value);
  let nombre = hours <= 1 ? "hour" : "hours"; //buscar sobre operardor ternario en javascript --> 1 =hour / 1 < hours
  if (name == "" || hours == "") {
    window.alert("You should insert a name and hour!");
  } else {
    if (isNaN(hours) != false) {
      //hacer que hours sea numerico
      window.alert("Ingresar un número");
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

function botonEditar(datos) {
  let texto = datos.parentNode.innerText;
  let hora = texto.match(/\d+/)[0];
  let nombre = texto.split("(")[0];
  document.getElementsByClassName("form__name")[0].value = nombre;
  document.getElementsByClassName("form__hours")[0].value = hora;
  datos.parentNode.remove();
}
