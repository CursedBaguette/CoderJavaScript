var numerito1 = parseFloat(prompt("Ingrese Valor 1"));
var numerito2 = parseFloat(prompt("Ingrese Valor 2"));

var iguales = numerito1 == numerito2;

if (iguales){
alert("Numeros iguales, por favor refresque la página e ingrese valores diferentes");
}else { 
alert("Suma: "+(numerito1+numerito2)+" /resta: "+(numerito1-numerito2)+" /Multiplicación: "+(numerito1*numerito2));
}