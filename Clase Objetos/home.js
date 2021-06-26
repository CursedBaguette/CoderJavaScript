
//objeto inicial que modificará el prompt
var paciente ={
nombre: "",
edad: "",
peso: "",
altura: "",
}
//objeto inicial que modificará el prompt

//Modificadores para el objeto que guardará los datos
var bucle = 0;

var registrados = {
}
//Modificadores para el objeto que guardará los datos guardados

//Boton para pedir datos
function begin(){
    paciente.nombre = prompt("Ingrese Nombre");
    paciente.edad = parseFloat(prompt("Ingrese Edad"));
    paciente.peso = parseFloat(prompt("Ingrese Peso"));
    paciente.altura = parseFloat(prompt("Ingrese Altura"));
    alert("Si los datos son correctos por favor presione en 'Registrar'");
}
//Boton para pedir datos

//Boton para guardar los datos
function registrar(){
    if(paciente.nombre == ""){
        alert("Faltan Datos, por favor presione 'Comenzar'")
    }else{
bucle++
registrados[bucle]  = paciente;
paciente = { nombre:"" };
    }
}
//Boton para guardar los datos


//Boton para mostrar los datos guardados en consola
function mostrar(){
    alert("Por favor chequee la consola");
    console.log(registrados);
}
//Boton para mostrar los datos guardados en consola






//Moldeador que no me funcionó :( ↓

/*
function moldeador(pNombre, pEdad, pPeso, pAltura){
    this.nombre = pNombre;
    this.edad = pEdad;
    this.peso = pPeso;
    this.altura = pAltura;
}


var paciente20 = new moldeador(paciente.nombre, paciente.edad, paciente.peso, paciente.altura);
*/

//Moldeador que no me funcionó :( ↑



