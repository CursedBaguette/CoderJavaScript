let registrados = [];
var vturno = 1;
const mShow = document.querySelector('#listado');


//Boton para pedir datos
function begin() {
    const paciente = {};
    paciente.turno = vturno++;
    paciente.nombre = prompt("Ingrese Nombre");
    paciente.edad = parseFloat(prompt("Ingrese Edad"));
    paciente.peso = parseFloat(prompt("Ingrese Peso"));
    paciente.altura = parseFloat(prompt("Ingrese Altura"));
    paciente.dia = parseInt(prompt("Ingrese Día"))
    paciente.mes = prompt("Ingrese Mes")
    paciente.hora = parseInt(prompt("Ingrese Hora XX:XX"))
    registrar(paciente);
};
//Boton para pedir datos

//Funcion de Registro
function registrar(nuevoPaciente) {
    if (nuevoPaciente.nombre == "") {
        return alert("Faltan Datos, por favor presione 'Comenzar'");
    }
    registrados.push(nuevoPaciente);
};
//Funcion de Registro


//Funcion para Mostrar
function mostrar() {
    mShow.innerHTML = "Pacientes ";
    const mListado = registrados => mShow.innerHTML +=`<li>Turno número: ${registrados.turno}  2020/${registrados.mes}/${registrados.dia} A las ${registrados.hora} turno de ${registrados.nombre} </li>`;
    registrados.forEach(mListado);
    alert("Por favor chequee la consola");
    console.log(registrados);
}
//Funcion para Mostrar


function remover(){
    let eliminar = document.querySelector('#limpiar').value;
    eliminar--;
    delete registrados[eliminar];
    mostrar();

}