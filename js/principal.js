var botonEncriptar = document.querySelector(".bt-encriptar"); 
var botonDesencriptar = document.querySelector(".bt-desencriptar");
var botonCopiar = document.querySelector(".bt-copiar");

botonEncriptar.addEventListener("click", function(){
    encriptar();
    borrarMensaje();
});
botonDesencriptar.addEventListener("click", function(){
    desencriptar();
    borrarMensaje();
});
    
botonCopiar.addEventListener("click", function(){
   copiarTexto();
})