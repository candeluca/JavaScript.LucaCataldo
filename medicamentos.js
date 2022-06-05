class medicamento {
    constructor (nombre, gramos, patologia, costo) {
        this.nombre = nombre;
        this.gramos = gramos;
        this.patologia = patologia;
        this.costo = costo;
}
}

const medicamento = new medicamento()

let boton2 = document.getElementById("boton2")

boton2.addEventListener("click", () => {
    console.log("medicamento cargado")
})

