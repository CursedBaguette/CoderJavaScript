
const registrados = [];

const falopa = document.querySelector('.listado');

//Boton para pedir datos
function begin() {
    const paciente = {};
    paciente.nombre = prompt("Ingrese Nombre");
    paciente.edad = parseFloat(prompt("Ingrese Edad"));
    paciente.peso = parseFloat(prompt("Ingrese Peso"));
    paciente.altura = parseFloat(prompt("Ingrese Altura"));
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
    falopa.innerHTML = "Pacientes ";
    const faso = registrados => falopa.innerHTML +=`   ${registrados.nombre} `;
    registrados.forEach(faso);
    
    alert("Por favor chequee la consola");
    console.log(registrados);
}
//Funcion para Mostrar
