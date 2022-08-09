function botonAdd() {
  let name = document.getElementsByClassName("form__name")[0].value;
  let hours = parseInt(document.getElementsByClassName("form__hours")[0].value);
  let nombre = hours <= 1 ? "hour" : "hours";
  if (name == "" || hours == "") {
    window.alert("You should insert a name and hour!");
  } else {
    if (isNaN(hours) != false) {
      window.alert("Ingresar un número");
    } else {
      document.getElementById(
        "contenedor"
      ).innerHTML += `<div class="respuesta">
        ${name} (${hours} ${nombre})
          <button type="button" class="boton_eliminar" onclick="botonEliminar(this)"> <i class="fa fa-trash-o" aria-hidden="true"></i> </button>
        </div>`;
    }
  }
}

function botonEliminar(elemento) {
  elemento.parentNode.remove();
}

/*
to do:
hacer que hours sea numerico
buscar sobre operardor ternario en javascript --> 1 =hour / 1 < hours

*/
