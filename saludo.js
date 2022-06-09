const container = document.querySelector(".container");

/* const saludar = () => {
    let doctor = prompt ("Ingrese su nombre");
    container.innerHTML = `<h3> Bienvenido Dr/a ${doctor}</h3>`
} 

saludar () */

const saludar = () => {
    const doctor = prompt ("Ingrese su nombre")
    Swal.fire(`Bienvenido Dr/a ${doctor}`)
} 

saludar ();