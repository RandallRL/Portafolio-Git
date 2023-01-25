// e-- > enter
// o-- > ober
// i-- > imes
// a-- > ai
// u-- > ufat


function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i  es para que afecto mayusculas como minusculas
    // g es para que afecte todas las lineas u oracion
    //m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"ines");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

 
    document.getElementById("texto2").innerHTML = txtCifrado;
 
}


function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i  es para que afecto mayusculas como minusculas
    // g es para que afecte todas las lineas u oracion
    //m es para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/ines/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");



document.getElementById("texto2").innerHTML = txtCifrado;



}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado.");
}