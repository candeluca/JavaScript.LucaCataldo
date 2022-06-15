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
  let medicamentosStorage = JSON.parse(localStorage.getItem('medicamentos'))

  medicamentosStorage.forEach (medicamento => {
    divMedicamentos.innerHTML += `
    <div class="card" style="margin: 2rem">
    <div class="card-body">
    <h5 class="card-title"> Medicamento: ${medicamento.nombre} ${medicamento.gramos}gr</h5>
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




inputTexto.addEventListener("change", () => {
  let buscador = inputTexto.value
  console.log(buscador.toLowerCase())
  let medicamentosFiltrados = medicamentos.filter (medicamento => medicamento.nombre.includes (buscador.toLowerCase()))


  medicamentosFiltrados.forEach (medicamento => {
    divMedicamentosFiltrados.innerHTML += 
    `
    <div class="card p-2"  style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">El medicamento buscado es: ${medicamento.nombre} ${medicamento.gramos}gr</h5>
    <p> Se utiliza para la patologia: ${medicamento.altura} </p>
    <p> Tiene un costo de: $${medicamento.altura}</p>
    </div>
    </div>
    `
  })
})


let boton2 = document.getElementById("boton2")

boton2.addEventListener("click", ()=> {
  Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Medicamento cargado exitosamente',
      showConfirmButton: false,
      timer: 1500
    })
})

