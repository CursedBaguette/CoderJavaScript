//Boton para pedir datos
var registrados = JSON.parse(localStorage.getItem('registra2'));

function begin() {
    const paciente = {};
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
    localSave();
};
//Funcion de Registro

//Funcion para Mostrar
function mostrar() {
    if (registrados === null) {
        console.log('test = null');
        registrados = [];
        begin();
    } else {
        console.log('test = cosas');
        mShow.innerHTML = "Pacientes ";
        const mListado = registrados => mShow.innerHTML += `<li> ${registrados.turno}  2020/${registrados.mes}/${registrados.dia} A las ${registrados.hora} turno de ${registrados.nombre} </li>`;
        registrados.forEach(mListado);
    }
    
}
//Funcion para Mostrar


function remover() {
    console.log(registrados);
    registrados = JSON.parse(localStorage.getItem('registra2'))
    let eliminar = document.querySelector('#limpiar').value;
    eliminar--;
    registrados.splice(eliminar, 1)
    localStorage.setItem('registra2', JSON.stringify(registrados))
    mostrar();
}


function localSave() {
    localStorage.setItem('registra2', JSON.stringify(registrados));
}







/*function remover() {
    console.log(registrados);
    registrados = JSON.parse(localStorage.getItem('registra2'))
    let eliminar = document.querySelector('#limpiar').value;
    eliminar--;
    if (eliminar == 0){
        registrados.shift()
    }
    delete registrados[eliminar];
    localStorage.setitem('registra2', JSON.stringify(registrados))
    mostrar();
}*/