
var paciente ={
nombre: "",
edad: "",
peso: "",
altura: "",
}

var bucle = 0;

var registrados = {
}



function begin(){
    paciente.nombre = prompt("Ingrese Nombre");
    paciente.edad = parseFloat(prompt("Ingrese Edad"));
    paciente.peso = parseFloat(prompt("Ingrese Peso"));
    paciente.altura = parseFloat(prompt("Ingrese Altura"));
    alert("Si los datos son correctos por favor presione en 'Registrar'");
}


function registrar(){
    if(paciente.nombre == ""){
        alert("Faltan Datos, por favor presione 'Comenzar'")
    }else{
bucle++
registrados[bucle]  = paciente;
paciente = { nombre:"" };
    }
}

function mostrar(){
    alert("Por favor chequee la consola");
    console.log(registrados);
}

/*
function moldeador(pNombre, pEdad, pPeso, pAltura){
    this.nombre = pNombre;
    this.edad = pEdad;
    this.peso = pPeso;
    this.altura = pAltura;
}


var paciente20 = new moldeador(paciente.nombre, paciente.edad, paciente.peso, paciente.altura);
*/





