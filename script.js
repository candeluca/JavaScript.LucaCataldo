const container = document.querySelector(".container");

const saludar = () => {
    const doctor = prompt ("Ingrese su nombre")
    container.innerHTML = `<h3> Bienvenido Dr/a ${doctor}</h3>`
} 

 saludar ();

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

const pte1 = new Paciente ("Candela", "Luca Cataldo",23, 52, 162, "escoliosis", "no toma medicacion")
const pte2 = new Paciente ("Morena", "Ohannessian", 18, 50, 152, "")

/* if (this.patologia == "") {
    console.log("Pte sano")
} else {
    console.log("Pte con patologia")
}  */

let pacientes = [pte1, pte2]

/* for(let i = 0; i < pacientes.length; i++) {
    (this.edad >=18)? console.log("Pte mayor") : (this.edad <18)? console.log("Pte menor")
} */



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


class Medicamento {
        constructor (nombre, gramos, patologia, costo) {
            this.nombre = nombre;
            this.gramos = gramos;
            this.patologia = patologia;
            this.costo = costo;
    }
}
    
const med1 = new Medicamento ("Metformina", "850mg", "Diabetes", "$3000")
const med2 = new Medicamento ("Sitagliptina", "50mg", "Diabetes", "$5000")
const med3 = new Medicamento ("Glimepirida", "4mg", "Diabetes", "$1500")
    
let medicamentos = [med1, med2, med3]

const medABuscar = prompt("Ingrese el medicamento por el que desea consultar")

let medicamentosBusqueda = medicamentos.find(medicamentos => medicamentos.nombre == "medABuscar")

console.log(medicamentosBusqueda ?? "Medicacion aun no cargada en el sistema")

let divMedicamentos = document.getElementById("divMedicamentos")

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

let boton1 = document.getElementById ("boton1")

function botonPtes() {
    console.log("Paciente cargado exitosamente!")
}

boton1.addEventListener ("click", botonPtes())


let boton2 = document.getElementById ("boton2")

function botonMeds() {
    console.log("Medicamento cargado exitosamente!")
}

boton2.addEventListener ("click", botonMeds())


/* for(let i = 0; i < pacientes.length; i++) {
    console.log(array[i])
}

console.log(`El paciente nuevo ingresado se llama${this.nombre}, tiene ${this.edad}años, pesa${this.peso}kg, mide${this.altura}cm, tiene${this.patologia}y actualmente esta medicado con${this.medicacion}`)



 let eliminarPte = prompt("Ingrese el paciente al que quiere eliminar")

 let indice = nombresPtes.indexOf(eliminarPte)

 if(indice != -1) {
     nombresPtes. splice (indice,1)
 } else {
     alert ("No se encontró a dicho paciente")
 }



let formulario = document.getElementById("idForm")
let solicitudesTestDrive = []

formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  let nombre = document.getElementById("nombre").value
  let dni = document.getElementById ("dni").value
  let email = document.getElementById ("email").value
  let telefono = document.getElementById ("celular").value

  console.log(nombre)
  console.log(dni)
  console.log(email)
  console.log(telefono)

  let solicitudTestDrive = {nombre: nombre, dni:dni, email:email, telefono:telefono}
  console.log(solicitudTestDrive)

  solicitudesTestDrive.push (solicitudTestDrive)
  console.log(solicitudesTestDrive)

  formulario.reset()

})

console.log(document) */