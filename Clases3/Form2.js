function validarFormulario() {
  var txtNombre = document.getElementById("nombre").value;
  var txtEdad = document.getElementById("edad").value;
  var txtCorreo = document.getElementById("correo").value;
  var txtFecha = document.getElementById("fecha").value;
  var cmbSelector = document.getElementById("selector").selectedIndex;
  var chkEstado = document.getElementById("checkBox");
  var rbtEstado = document.getElementsByName("radioButton");

  var banderaRBTN = false;
  var validacion_complete = true;

  //Test campo obligatorio
  if (txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)) {
    alert(
      "ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco"
    );
    document.getElementById("nombre").className = "invalid_text";
    document.getElementById("mensaje_error").innerHTML =
      "Por favor, ingrese el nombre";
    validacion_complete = false;
    //return false;
  }

  //Test edad
  if (txtEdad == null || txtEdad.length == 0 || isNaN(txtEdad)) {
    alert("ERROR: Debe ingresar una edad");
    document.getElementById("edad").className = "invalid_text";
    document.getElementById("mensaje_error").innerHTML =
      document.getElementById("mensaje_error").innerHTML +
      "<br />" +
      "Por favor, ingrese su edad";
    validacion_complete = false;
    return false;
  }

  //Test correo
  if (!/\S+@\S+\.\S+/.test(txtCorreo)) {
    alert("ERROR: Debe escribir un correo válido");
    validacion_complete = false;
    return false;
  }

  //Test fecha
  if (!isNaN(txtFecha)) {
    alert("ERROR: Debe elegir una fecha");
    validacion_complete = false;
    return false;
  }

  //Test comboBox
  if (cmbSelector == null || cmbSelector == 0) {
    alert("ERROR: Debe seleccionar una opcion del combo box");
    validacion_complete = false;
    return false;
  }

  //Test checkBox
  if (!chkEstado.checked) {
    alert("ERROR: Debe seleccionar el checkbox");
    validacion_complete = false;
    return false;
  }

  //Test RadioButtons
  for (var i = 0; i < rbtEstado.length; i++) {
    if (rbtEstado[i].checked) {
      banderaRBTN = true;
      break;
    }
  }
  if (!banderaRBTN) {
    alert("ERROR: Debe elegir una opción de radio button");
    validacion_complete = false;
    return false;
  }

  if (validacion_complete == true) {
    alert("Enviar al servidor");
    document.getElementById("mensaje_error").innerHTML = "";
    document.getElementById("mensaje_error").className = "error";
  }

  return true;
}
