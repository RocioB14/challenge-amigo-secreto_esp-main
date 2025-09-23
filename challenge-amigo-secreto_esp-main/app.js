// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const textoAmigos = document.getElementById("amigo").value;
    
    if (textoAmigos == "" || textoAmigos == null){
        alert("Por favor, inserte un nombre");
               
    }else{
        amigos.push(textoAmigos);
    }

    document.getElementById("amigo").value = "";

}


