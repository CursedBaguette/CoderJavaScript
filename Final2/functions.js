var registrados = JSON.parse(localStorage.getItem('registra2'));

//Boton para pedir datos
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
    if (nuevoPaciente.nombre == "" || nuevoPaciente.edad == "" || nuevoPaciente.peso == ""|| nuevoPaciente.altura == ""|| nuevoPaciente.dia == ""|| nuevoPaciente.mes == ""|| nuevoPaciente.hora == "") {
        return   Swal.fire({
            icon: 'error',
            title: 'Error de Carga',
            text: 'Por favor chequee datos ingresados',
        })
    } else {
        registrados.forEach(function (item) {
            if (nuevoPaciente.dia === item.dia && nuevoPaciente.mes === item.mes && nuevoPaciente.hora === item.hora) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ese turno está utilizado!',
                })
                throw console.log("Turno ocupado");
            }
        })

        registrados.push(nuevoPaciente);
        mostrar();
        localSave();
    };
}
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
            mShow.innerHTML += `<li> Turno: ${turnos1+1} &nbsp;&nbsp; ${item.dia}  de ${item.mes} del 2020 A las ${item.hora} turno de ${item.nombre}<i class="ms-4 btn btn-primary bi bi-trash" onclick="remover2(${turnos1})"></i> </li> `;
        });
        $("#datos").fadeIn();
    }

}
//Funcion para Mostrar


//Funcion Quitar
function remover2(turnos2) {
    registrados = JSON.parse(localStorage.getItem('registra2'))
    registrados.splice(turnos2, 1)
    localStorage.setItem('registra2', JSON.stringify(registrados))
    mostrar();
}
//Funcion Quitar


//Funcion ocultar
function remover() {
    $("#datos").fadeOut();
}
//Funcion ocultar



//Funcion para guardar en local
function localSave() {
    localStorage.setItem('registra2', JSON.stringify(registrados));
}
;
//Funcion para guardar en local



//Funcion para exportar a CSV
function generateCSV() {
    let csv = 'Nombre, Edad, Peso, Altura, Dia, Mes, Hora\n';
    registrados.forEach(function(each) {
        console.log(Object.values(each))
        csv += Object.values(each).join(',');
        csv += "\n";
    });

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'data.csv';
    hiddenElement.click();
}
//Funcion para exportar a CSV

