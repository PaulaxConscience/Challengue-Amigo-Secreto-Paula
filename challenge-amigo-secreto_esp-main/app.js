// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];
function agregarAmigo(){
    let nombre = document.getElementById("amigo");
    let nombre2 = nombre.value.trim();
    lista.push(nombre2);
    console.log(lista);
    return;

}
