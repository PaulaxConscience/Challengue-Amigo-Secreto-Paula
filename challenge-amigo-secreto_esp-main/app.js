// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista = [];
function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre === "") {
    alert ("Por favor, inserte un nombre");
    } else {
        lista.push(nombre);
        input.value= "";
        if (lista.length>0){
            console.log("La lista tiene amigos:", lista)
        }
        mostrarLista();
    }
}
function mostrarLista() {
    // Obtener el elemento donde se mostrará la lista
    let listaHTML = document.getElementById("listaAmigos");

    // Limpiar la lista en el HTML antes de actualizarla
    listaHTML.innerHTML = "";

    // Agregar cada nombre como un nuevo elemento de lista (<li>)
    lista.forEach(function(nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}
function sortearAmigo(){
    let indiceAmigoSorteado = Math.floor(Math.random()*lista.length);
    let amigoSorteado = lista[indiceAmigoSorteado];
    console.log(amigoSorteado);
    mostrarAmigoSorteado(amigoSorteado);
}
function mostrarAmigoSorteado(amigoSorteado){
    let listaHTML = document.getElementById("resultado");
    listaHTML.textContent = "El amigo secreto sorteado es: " + amigoSorteado;
}


