



let num1 = 0;
let num2 = 0;
let resultado = 0;
let mostrar = document.querySelector('.test');
mostrar.innerHTML = resultado;


function begin(){
    resultado = 0;
    mostrar.innerHTML = resultado;
    num1 = parseFloat(prompt("Ingrese num 1"));
    num2 = parseFloat(prompt("ingrese numero 2"));
    alert("Clickee en boton de opreación");
}

function suma(){
    if(num1 == 0 && num2 == 0){
        alert("No hay numeros cargados para operar");
    }else{
    resultado = num1 + num2;
    mostrar.innerHTML = resultado;
    alert(resultado);
    num1 = 0;
    num2 = 0;
}
}



function resta(){
    if(num1 == 0 && num2 == 0){
        alert("No hay numeros cargados para operar");
    }else{
    resultado = num1 - num2;
    mostrar.innerHTML = resultado;
    alert(resultado);
    num1 = 0;
    num2 = 0;
    }
}

function multiplicacion(){
    if(num1 == 0 && num2 == 0){
        alert("No hay numeros cargados para operar");
    }else{
    resultado = num1 * num2;
    mostrar.innerHTML = resultado;
    alert(resultado);
    num1 = 0;
    num2 = 0;
    }
}

function division(){
    if(num1 == 0 && num2 == 0){
        alert("No hay numeros cargados para operar");
    }else if( num2==0){
    mostrar.innerHTML = "Syntax Error";
    }else{
    resultado = num1 / num2;
    mostrar.innerHTML = resultado;
    alert(resultado);
    num1 = 0;
    num2 = 0;
    }
}

function seguir(){
    num1 = resultado;
    mostrar.innerHTML = resultado;
    num2 = parseFloat(prompt("ingrese numero otro número para continuar"));
    alert("Clickee en boton de opreación");
}