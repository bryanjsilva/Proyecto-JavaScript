// Hemos omitido los acentos en los comentarios por compatibilidad

// Validación de cada campo mientras se escribe y cuando se oprime el botón Continuar

// Función para validar nombres de acuerdo a una expresión regular que exluye caracteres especiales
function validarNombres(formulario){
  const re_name = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

  if(!re_name.test(formulario.nombres.value)){
    document.getElementById('errorNombres').style.visibility='visible';
    formulario.nombres.focus();
    return false;
  }else{
    document.getElementById('errorNombres').style.visibility='hidden';
    return true;
  }
}

// Función para validar correos de acuerdo a una expresión regular
function validarCorreo(formulario){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!re.test(formulario.email.value)){
      document.getElementById('errorEmail').style.visibility='visible';
      formulario.email.focus();
      return false;
  }else{
      document.getElementById('errorEmail').style.visibility='hidden';
      return true;
  }
}

// Función para validar contraseñas de al menos 7 caracteres
function validarPass(formulario){
  if (formulario.contrasena.value.trim().length<7){
      document.getElementById("errorContrasena").style.visibility='visible';
      formulario.contrasena.focus();
      return false;
  }else{
      document.getElementById("errorContrasena").style.visibility='hidden';
      return true;
  }
}

// Función para validar la confirmación de la contraseña
function validarConfirmacion(formulario){
  if(formulario.contrasena.value != formulario.confirmacion.value){
    document.getElementById('errorConfirmacion').style.visibility='visible';
    formulario.confirmacion.focus();
    return false;
  }else{
    document.getElementById('errorConfirmacion').style.visibility='hidden';
    return true;
  }

}

// Función para validar si se ha seleccionado un elemento de la lista de opciones
function validarTipo(formulario){
  if(formulario.tipo.value == '-1'){
    document.getElementById('errorTipo').style.visibility='visible';
    formulario.tipo.focus();
    return false;
  }else{
    document.getElementById('errorTipo').style.visibility='hidden';
    return true;
  }
}

// Función para validar si se han aceptado los términos y condiciones
function validarAcepto(formulario){
  if(!formulario.acepto.checked){
    document.getElementById('errorAcepto').style.visibility='visible';
    return false;
  }else{
    document.getElementById('errorAcepto').style.visibility='hidden';
    return true;
  }
}

// Función para validar el formulario completo, si todas las funciones anteriores son true se envía el formulario
function validar(formulario) {
  if(validarNombres(formulario) && validarCorreo(formulario) && validarPass(formulario) && validarConfirmacion(formulario) && validarTipo(formulario) && validarAcepto(formulario)){
    
  alert('Se ha registrado correctamente')
  return true;
  
  }else{
    return false;
  }  
}
