class medicamento {
    constructor (nombre, gramos, patologia, costo) {
        this.nombre = nombre;
        this.gramos = gramos;
        this.patologia = patologia;
        this.costo = costo;
}
}

const med1 = new medicamento ("metformina", "850mg", "diabetes", "$3000")
const med2 = new medicamento ("sitagliptina", "50mg", "diabetes", "$5000")
const med3 = new medicamento ("glimepirida", "4mg", "diabetes", "$1500")

let medicamentos = [med1, med2, med3]

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
