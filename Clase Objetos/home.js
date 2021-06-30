
//Modificadores para el objeto que guardará los datos guardados

function moldeador(pNombre, pEdad, pPeso, pAltura){
    this.nombre = pNombre;
    this.edad = pEdad;
    this.peso = pPeso;
    this.altura = pAltura;
}
var paciente20 = "";

//Boton para pedir datos
function begin(){
    paciente20 = new moldeador(prompt("Ingrese nombre"), prompt("Ingrese edad"), prompt("Ingrese peso"), prompt("Ingrese altura"));
}
//Boton para pedir datos



//Boton para mostrar los datos guardados en consola
function mostrar(){
    alert("Por favor chequee la consola");
    console.log(paciente20);
}
//Boton para mostrar los datos guardados en consola





