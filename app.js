// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (document.getElementById("mensaje").innerText !== "") {
    document.getElementById("mensaje").innerText = "";
  }

  if (nombre === "") {
    document.getElementById("mensaje").innerText = "Por favor, inserte un nombre.";
    return;
  }

  if (verificarAmigoExistente(nombre)) {
    document.getElementById("mensaje").innerText = "El nombre ya existe.";
    return;
  }

  amigos.push(nombre);
  input.value = "";
  console.log(amigos);
  

  //mostrar el nombre en el elemento con id "listaAmigos"
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.innerText = amigo;
    listaAmigos.appendChild(li);
  });

}

function verificarAmigoExistente(nombre) {
  return amigos.includes(nombre);
}