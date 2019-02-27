function Login() {
  var done = 0;
  console.log("Validar login");
  var usuario = document.login.usuario.value;
  var password = document.login.password.value;
  if (usuario == "USUARIO1" && password == "CONTRASEÑA1") {
    window.location = "Form4_exito.html";
  }
  if (usuario == "USUARIO2" && password == "CONTRASEÑA2") {
    window.location = "Form1_exito.html";
  }
  if (usuario == "" && password == "") {
    //window.location = "errorpopup.html";
    //alert("Debe ingresar algún valor");
    var myWindow = window.open("", "'ErrorLogin'", "width=300,height=300");
    myWindow.document.write(
      "<h2>Debe ingresar algún valor para el formulario</h2>"
    );
  }
}
