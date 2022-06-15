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

let idFormularioMed = document.querySelector('#idFormMed')
let divMedicamentos = document.querySelector ('#divMedicamentos')
let mostrarMed = document.querySelector ('#mostrarMed')

idFormularioMed.addEventListener('submit', (e) => {
  e.preventDefault()
  let datosFormMed = new FormData(e.target)

  const pte = new medicamento (datosFormMed.get('nombre'), datosFormMed.get('gramos'), datosFormMed.get('patologia'), datosFormMed.get('costo'))
  medicamentos.push(pte)
  console.log(medicamentos)
  localStorage.setItem('medicamentos', JSON.stringify(medicamentos))
  idFormularioMed.reset()
})

mostrarMed.addEventListener('click', () => {
  let pacientesStorage = JSON.parse(localStorage.getItem('pacientes'))

  medicamentosStorage.forEach (medicamento => {
    divMedicamentos.innerHTML += `
    <div class="card" style="margin: 2rem">
    <div class="card-body">
    <h5 class="card-title"> Medicamento: ${medicamento.nombre }</h5>
    <p class="card-text">
     Gramos: ${medicamento.gramos}
    </p>
    <p class="card-text">
     Patologia:  ${medicamento.patologia}
    </p>
    <p class="card-text">
     Costo: ${medicamento.costo}
    </p>
  </div>
  </div>
  `
  })
})







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
