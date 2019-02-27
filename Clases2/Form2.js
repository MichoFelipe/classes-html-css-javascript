function validar_formulario() {
  valid = true;

  console.log("validar_formulario");

  if (document.contacto_form.contact_name.value == "") {
    alert("Por favor, complete el campo 'Nombre'.");
    valid = false;
  }

  if (
    document.contacto_form.genero[0].checked == false &&
    document.contacto_form.genero[1].checked == false
  ) {
    alert("Por favor, seleccione su género: Masculino or Femenino");
    valid = false;
  }

  if (document.contacto_form.edad.selectedIndex == 0) {
    alert("Por favor, seleccione su edad.");
    valid = false;
  }

  if (document.contacto_form.terms.checked == false) {
    alert("Por favor, verifique y acepte los términos y condiciones.");
    valid = false;
  }

  return valid;
}
