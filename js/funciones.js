function encriptar(){
    var texto = document.querySelector("#textoArea").value; 
    var textoAreaEncriptar = document.querySelector("#textoEncriptado");
    var textoEncriptado = texto.replace(/e/ig, "enter")
    .replace(/i/ig, "imes")
    .replace(/a/ig, "ai")
    .replace(/o/ig, "over")
    .replace(/u/ig, "ufat");
    return textoAreaEncriptar.innerHTML = textoEncriptado;  
}

function desencriptar(){
    var texto = document.querySelector("#textoArea").value;  
    var textoAreaEncriptar = document.querySelector("#textoEncriptado");
    var textoEncriptado = texto.replace(/enter/ig, "e")
    .replace(/imes/ig, "i")
    .replace(/ai/ig, "a")
    .replace(/over/ig, "o")
    .replace(/ufat/ig, "u");
    return textoAreaEncriptar.innerHTML = textoEncriptado;
};

function borrarMensaje(){
    var texto = document.querySelector("#textoArea");
    texto.value = "";
}

function copiarTexto(){ 
    var areaTexto = document.getElementById("textoEncriptado");
    areaTexto.select();
    document.execCommand("copy");
}