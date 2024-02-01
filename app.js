var textoOriginal;
var textoEncriptado;
var salidaTexto;

function validarCaracteres(texto){
    var caracteres = /^[a-z\s]+$/;
    return caracteres.test(texto);
}

function encriptarTexto(){
    textoOriginal=document.getElementById("textoEncriptar").value;
    if(!validarCaracteres(textoOriginal)){ //validamos caracteres
        alert("Por favor, ingrese SOLO letras minúsculas, sin acentos ni carácteres especiales.");
        return;
    }
    textoEncriptado=textoOriginal.replace(/[aeiou]/g, function(cambioE){
        switch (cambioE) {
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'a': return 'ai';
            case 'o': return 'ober';
            case 'u': return 'ufat';
            default: return cambioE;
        }
    });
    document.getElementById("salidaTexto").value=textoEncriptado;
}

function desencriptarTexto(){
    textoEncriptado=document.getElementById("textoEncriptar").value;
    if (!validarCaracteres(textoEncriptado)) {
        alert("Por favor, ingrese SOLO letras minúsculas, sin acentos ni carácteres especiales.");
        return;
    }
    textoOriginal = textoEncriptado.replace(/(enter|imes|ai|ober|ufat)/g, function(cambioD) {
        switch (cambioD) {
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ai': return 'a';
            case 'ober': return 'o';
            case 'ufat': return 'u';
            default: return cambioD;
        }
    });
    document.getElementById("salidaTexto").value = textoOriginal;
}

function copiarTexto(){
    salidaTexto=document.getElementById("salidaTexto");
    salidaTexto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function limpiarTexto(){
    document.querySelector('#textoEncriptar').value = '';
    document.querySelector('#salidaTexto').value = '';
}