class paciente {
    constructor (id, nombre, apellido, edad, peso, altura, patologia, medicacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.patologia = patologia;
        this.medicacion = medicacion;
    }
    mostrarNombrePte(){
      console.log(this.nombre)
    }
}

let pacientes = []

if(localStorage.getItem('pacientes')) {
  pacientes = JSON.parse(localStorage.getItem('pacientes'))
} else {
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
}


let idFormulario = document.querySelector('#idForm')
let divPacientes = document.querySelector ('#divPacientes')
let mostrar = document.querySelector ('#mostrar')

idFormulario.addEventListener('submit', (e) => {
  e.preventDefault()
  let datosForm = new FormData(e.target)

  const pte = new paciente (datosForm.get('nombre'), datosForm.get('apellido'), datosForm.get('edad'), datosForm.get('peso'), datosForm.get('altura'), datosForm.get('patologia'),datosForm.get('medicacion'))
  pacientes.push(pte)
  console.log(pacientes)
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
  idFormulario.reset()
})


mostrar.addEventListener('click', () => {
  let pacientesStorage = JSON.parse(localStorage.getItem('pacientes'))

  pacientesStorage.forEach (paciente => {
    divPacientes.innerHTML += `
    <div class="card" style="margin: 2rem">
    <div class="card-body">
    <h5 class="card-title">Nombre y Apellido: ${paciente.nombre } ${paciente.apellido}</h5>
    <p class="card-text">
     Edad: ${paciente.edad}
    </p>
    <p class="card-text">
     Peso:  ${paciente.peso}
    </p>
    <p class="card-text">
     Altura: ${paciente.altura}
    </p>
    <p class="card-text">
     Patologia: ${paciente.patologia}
   </p>
   <p class="card-text">
    Medicacion: ${paciente.medicacion}
  </p>
  </div>
  </div>
  `
  })
})




let carrito = []

let pacientesJSON = JSON.stringify(pacientes)

//para pasar nuevamente a un objeto:
let pacientesParseados = JSON.parse (localStorage.getItem("pacientes"))

console.log (pacientesParseados)


inputTexto.addEventListener("change", () => {
  let buscador = inputTexto.value
  console.log(buscador.toLowerCase())
  let pacientesFiltrados = pacientes.filter (paciente => paciente.nombre.includes (buscador.toLowerCase()))

  pacientesFiltrados.forEach (paciente => {
    divPacientesFiltrados.innerHTML += 
    `
    <div class="card p-2"  style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">El paciente buscado es: ${paciente.nombre} ${paciente.apellido}</h5>
    <p> Tiene ${paciente.edad} años</p>
    <p> Pesa ${paciente.altura} kg</p>
    <p> Mide ${paciente.altura} cm</p>
    <p> Su patologia es: ${paciente.patologia} </p>
    <p> La medicacion que toma es: ${paciente.medicacion} </p>
    </div>
    </div>
    `
  })
})

let divPacientesFiltrados = document.getElementById ("divPacientesFiltrados")


/* pacientes.forEach(paciente =>{
    id=divCargas.innerHTML += `

    <div class="card" id="paciente ${paciente.id}" style="margin: 2rem">
  <div class="card-body">
    <h5 class="card-title">Nombre y Apellido: ${paciente.nombre } ${paciente.apellido}</h5>
    <p class="card-text">
     Edad: ${paciente.edad}
    </p>
    <p class="card-text">
     Peso:  ${paciente.peso}
    </p>
    <p class="card-text">
     Altura: ${paciente.altura}
    </p>
    <p class="card-text">
     Patologia: ${paciente.patologia}
   </p>
   <p class="card-text">
    Medicacion: ${paciente.medicacion}
  </p>
  <button id= "boton ${paciente.id}" class="btn btn-dark"> Agregar al archivo </button>
  </div>
  </div>
  `
})  */

/* pacientes.forEach(paciente => {
  document.getElementById(`boton ${paciente.id}`).addEventListener("click", () => {
    console.log(paciente)
    carrito.push (paciente)
    localStorage.setItem ("pacientesGuardados", JSON.stringify(carrito))
  })
}) 

document.getElementById("mostrar").addEventListener('click', () => {
  let arrayParseado = JSON.parse(localStorage.getItem('pacientesGuardados'))
  console.log(arrayParseado)
})
 */

let boton1 = document.getElementById("boton1")

boton1.addEventListener("click", ()=> {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Paciente cargado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
})
