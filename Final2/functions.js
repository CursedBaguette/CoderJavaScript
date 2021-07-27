//Boton para pedir datos
var registrados = JSON.parse(localStorage.getItem('registra2'));

function begin() {
    const paciente = {};
    paciente.nombre = $("#inputName4").val();
    paciente.edad = $("#inputNumber").val();
    paciente.peso = $("#inputNumber2").val();
    paciente.altura = $("#inputNumber3").val();
    paciente.dia = $("#inputStateDia").val();
    paciente.mes = $("#inputStateMes").val();
    paciente.hora = $("#inputStateHora").val();
    registrar(paciente);
};
//Boton para pedir datos

//Funcion de Registro
function registrar(nuevoPaciente) {
    if (nuevoPaciente.nombre == "") {
        return alert("Faltan Datos");
    }

            ///funcion bugueada//
    if (registrados.length !== 0) {
        registrados.forEach(function (item) {
            if (nuevoPaciente.dia === item.dia && nuevoPaciente.mes === item.mes && nuevoPaciente.hora === item.hora) {
                console.log("camino1")
                alert("turno creado")
            } else {
                registrados.push(nuevoPaciente);
                mostrar()
                localSave();
                console.log("camino2")
            }})
            ///funcion bugueada//
        }
        
        else if (registrados.length === 0) {
            registrados.push(nuevoPaciente);
            mostrar()
            localSave();
            console.log("camino3")
        }

        

    
};
//Funcion de Registro

//Funcion para Mostrar
function mostrar() {
    if (registrados === null) {
        console.log('test = null');
        registrados = [];
    } else {
        console.log('test = cosas');
        mShow.innerHTML = "Pacientes ";
        registrados.forEach(function (item) {
            let turnos1 = registrados.indexOf(item);
            mShow.innerHTML += `<li> Turno: ${turnos1} &nbsp;&nbsp; ${item.dia}  de ${item.mes} del 2020 A las ${item.hora} turno de ${item.nombre}<i class="ms-4 btn btn-primary bi bi-trash" onclick="remover2(${turnos1})"></i> </li> `;
        });
        $("#datos").show();
    }

}
//Funcion para Mostrar

function remover2(turnos2) {
    registrados = JSON.parse(localStorage.getItem('registra2'))
    registrados.splice(turnos2, 1)
    localStorage.setItem('registra2', JSON.stringify(registrados))
    mostrar();
}



//Funcion para Mostrar
function remover() {
    $("#datos").hide();
}



/*function remover() {
    console.log(registrados);
    registrados = JSON.parse(localStorage.getItem('registra2'))
    let eliminar = $("#limpiar").val();
    eliminar--
    registrados.splice(eliminar, 1)
    localStorage.setItem('registra2', JSON.stringify(registrados))
    mostrar();
}*/


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