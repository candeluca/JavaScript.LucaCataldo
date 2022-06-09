class paciente {
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

const pte1 = new paciente ("candela", "luca cataldo",23, 52, 162, "escoliosis", "no toma medicacion")
const pte2 = new paciente ("morena", "ohannessian", 18, 50, 152, "")
const pte3 = new paciente ("maximo", "ohannessian", 16, 70, 179, "")

let pacientes = [pte1, pte2, pte3]

/* inputTexto.addEventListener("input", () => {
  let buscador = inputTexto.value
  console.log(buscador.toLowerCase())
  console.log(pacientes.filter (paciente => paciente.nombre.includes (buscador.toLowerCase())))
}) */
 
inputTexto.addEventListener("change", () => {
  let buscador = inputTexto.value
  console.log(buscador.toLowerCase())
  let pacientesFiltrados = pacientes.filter (paciente => paciente.nombre.includes (buscador.toLowerCase()))

  pacientesFiltrados.forEach (paciente => {
    divPacientesFiltrados.innerHTML += `
    <div class="card p-2" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">El paciente buscado es: ${paciente.nombre} ${paciente.apellido}</h5>
    <p> Tiene ${paciente.edad} años</p>
    <p> Pesa ${paciente.altura} kg</p>
    <p> Mide ${paciente.altura} cm</p>
    <p> Su patologia es: ${paciente.patologia} </p>
    <p> La medicacion que toma es: ${paciente.medicacion} </p>
    </div>
    </div>`

  })
})

let divPacientesFiltrados = document.getElementById ("divPacientesFiltrados")
 


pacientes.forEach(pacienteEnArray =>{
    id=divCargas.innerHTML += `

    <div class="card" id="paciente ${pacienteEnArray.id}" style="margin: 2rem">
  <div class="card-body">
    <h5 class="card-title">Nombre y Apellido: ${pacienteEnArray.nombre } ${pacienteEnArray.apellido}</h5>
    <p class="card-text">
     Edad: ${pacienteEnArray.edad}
    </p>
    <p class="card-text">
     Peso:  ${pacienteEnArray.peso}
    </p>
    <p class="card-text">
     Altura: ${pacienteEnArray.altura}
    </p>
    <p class="card-text">
     Patologia: ${pacienteEnArray.patologia}
   </p>
   <p class="card-text">
    Medicacion: ${pacienteEnArray.medicacion}
  </p>
  </div>
  </div>

  `
})

let boton1 = document.getElementById("boton1")

boton1.addEventListener("click", ()=> {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Paciente cargado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
})

/* lo de arriba pero sin el cartel: 
boton1.addEventListener("click", () => {
  console.log("medicamento cargado")
}) */