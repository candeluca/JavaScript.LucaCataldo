class medicamento {
    constructor (nombre, gramos, patologia, costo) {
        this.nombre = nombre;
        this.gramos = gramos;
        this.patologia = patologia;
        this.costo = costo;
}
}

let medicamentos = []

if(localStorage.getItem('medicamentos')) {
  pacientes = JSON.parse(localStorage.getItem('medicamentos'))
} else {
  localStorage.setItem('medicamentos', JSON.stringify(medicamentos))
}

let idFormulario = document.querySelector('#idFormMed')
let divProductos = document.querySelector ('#divProductos')
let mostrar = document.querySelector ('#mostrar')


let medicamentosJSON = JSON.stringify(medicamentos)

//para pasar nuevamente a un objeto:
let medicamentosParseados = JSON.parse (localStorage.getItem("medicamentos"))

console.log (medicamentosParseados)



inputTexto.addEventListener("input", () => {
  let buscador = inputTexto.value
  console.log(buscador.toLowerCase())
  console.log(medicamentos.filter (medicamento => medicamento.nombre.includes (buscador.toLowerCase())))
})
 


medicamentos.forEach(medicamentoEnArray =>{
    id=divCargasMed.innerHTML += `

    <div class="card" id="medicamento ${medicamentoEnArray.id}" style="margin: 2rem">
  <div class="card-body">
    <h5 class="card-title">Nombre: ${medicamentoEnArray.nombre}</h5>
    <p class="card-text">
     Gramos: ${medicamentoEnArray.gramos}
    </p>
    <p class="card-text">
     Patologia: ${medicamentoEnArray.patologia}
    </p>
    <p class="card-text">
     Costo: ${medicamentoEnArray.costo}
    </p>
  </div>
  </div>
 
  `
})


let boton2 = document.getElementById("boton2")

boton2.addEventListener("click", () => {
    console.log("medicamento cargado")
})
