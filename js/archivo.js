'use strict'
let botones = document.getElementById('botones');
let botoness = document.getElementById('botoness');
function inciarSesion(){
  console.log('apretado');
  let boton = document.querySelector('#logeo');
  boton.style.background = 'blue';
  botones.style.background = 'pink';
  botones.style.display = 'none';
  botoness.style.display = 'block';
};
