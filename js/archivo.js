'use strict'
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