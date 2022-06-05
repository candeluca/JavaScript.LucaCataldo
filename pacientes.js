class Paciente {
    constructor (nombre, apellido, edad, peso, altura, patologia, medicacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.patologia = patologia;
        this.medicacion = medicacion;
    }
}


let boton1 = document.getElementById("boton1")

boton1.addEventListener("click", () => {
    console.log("paciente cargado")
})