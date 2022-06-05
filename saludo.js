const container = document.querySelector(".container");

const saludar = () => {
    let doctor = prompt ("Ingrese su nombre");
    container.innerHTML = `<h3> Bienvenido Dr/a ${doctor}</h3>`
} 

saludar ()