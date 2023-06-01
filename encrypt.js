let texto_ingresado = document.getElementById("input");
let btn_encriptar = document.getElementById("btn_encriptar");
let btn_desencriptar = document.getElementById("btn_desencriptar");
let texto_trabajado = document.getElementById("texto_trabajado");
let desaparecer_contenedor = document.getElementById("desaparecer_contenedor");
let caja_encriptar = document.getElementById("caja_encriptar");
let caja_lateral = document.getElementById("caja_lateral");
let caja_copiar = document.getElementById("caja_copiar");
let btn_copia = document.getElementById("btn_copia");

const vocals ={
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat"
}



texto_ingresado.addEventListener("input", function(){
    this.value = this.value.replace (/[^a-zA-Zñ\s]/g, '');
    this.value = this.value.toLowerCase()
    if(this.value === ""){
        texto_trabajado.innerText = "";
        desaparecer_contenedor.style.display = "flex";
        caja_encriptar.style.display = "none"
        caja_copiar.style.display = "none"
    }
});

function encriptar(){
    let text_value = texto_ingresado.value;
    let text_array = text_value.split ("");
    text_array.forEach((element, index) => {
        if(vocals[element]){
            text_array[index] = vocals [element];
        }
    });

    let encriptar_string = text_array.join ("");
    console.log(encriptar_string);
    texto_trabajado.innerText = encriptar_string;
    if(encriptar_string){
        toComplete();
    };
};

function desencriptar(){
    let content_value = texto_ingresado.value;

    let content_array = content_value.split(" ");

    for(let j = 0; j < content_array.length; j++){
        content_array [j] = content_array [j].replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
    }
    content_string = content_array.join(" ")
    texto_trabajado.innerText = content_string;
    if(content_string){
        toComplete()
    }
}

function toComplete(){
    desaparecer_contenedor.style.display = "none";
    caja_encriptar.style.display = "block";
    caja_lateral.style.justifyContent ="space-evenly";
    caja_copiar.style.display ="flex";
}
    
function copiar(){
    let copiar = texto_trabajado.textContent;
    navigator.clipboard.writeText(copiar);
}

btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;
btn_copia.onclick = copiar;
