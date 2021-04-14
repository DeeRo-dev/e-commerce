'use strict'
//Funcion para abrir la parte de iniciar secion o registrarse
let botones = document.getElementById('botones');
let logear = document.getElementById('logear');
function inciarSesion(){
  
  botones.style.display = 'none';
 logear.style.display = 'block';

};

function cerrar(){
  botones.style.display = 'block';
  logear.style.display = 'none';
};

//Mandar los datos del email

function ingresarAlUsuario(){
  let cuentaDeEmail = document.getElementById('email').value;
  let contraseña = document.getElementById('contraseña').value;
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
 let entrar = true ;
  console.log('click');
  console.log(contraseña);
  console.log(cuentaDeEmail);
  if (cuentaDeEmail == "") {
    alert('Coloque su email');
    entrar = false;
  }
  console.log(entrar);
   if (entrar == true) {
    if (!emailRegex.test(email.value)) {
      let focusError = document.getElementById('email');
      alert('email false');
      document.getElementById('email').focus();
      focusError.style.border = '1px solid red'
    }
   }
  
};

