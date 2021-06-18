/*var numerito1 = parseFloat(prompt("Ingrese Valor 1"));
var numerito2 = parseFloat(prompt("Ingrese Valor 2"));

var iguales = numerito1 == numerito2;

if (iguales){
alert("Numeros iguales, por favor refresque la página e ingrese valores diferentes");
}else { 
alert("Suma: "+(numerito1+numerito2)+" /resta: "+(numerito1-numerito2)+" /Multiplicación: "+(numerito1*numerito2));
}*/


var ingProducto = prompt("Ingrese el nombre del producto \n Leche \n Yerba \n Pan \n Terminar")
var cantidad = 0
var leche = 10
var yerbaMate = 10
var pan = 10


while(leche >0 || yerbaMate > 0 || pan > 0){
    if(ingProducto === "Leche" && leche >0){ 
        alert(`Seleccionaste ${ingProducto}`);
        do{
            cantidad = prompt("Ingrese Cantidad (maximo 10)");
            if(cantidad > 10){
                alert("Maximo 10 productos")
                cantidad = prompt("Ingrese Cantidad (maximo 10)")
            }
            leche = leche - cantidad;
            alert(`Quedan ${leche} Leches en stock`);
            ingProducto = prompt("Ingrese el nombre del producto \n Leche \n Yerba \n Pan \n Terminar");
            break;
        }while(leche >0); 
    
    }  
    while(ingProducto === "Leche" && leche === 0){
        alert("Se han agotado las Leches , seleccione otro producto")
        var ingProducto = prompt("Ingrese el nombre del producto \n Leche \n Yerba \n Pan \n Terminar")
    } 
    

    if(ingProducto == "Yerba" && yerbaMate > 0){ 
        alert(`Seleccionaste ${ingProducto}`);
        do{
            cantidad = prompt("Ingrese Cantidad (maximo 10)");
            if(cantidad > 10){
                alert("Maximo 10 productos")
                cantidad = prompt("Ingrese Cantidad (maximo 10)")
            }
            yerbaMate = yerbaMate - cantidad;
            alert(`Quedan ${yerbaMate} Yerba Mate en stock`);
            ingProducto = prompt("Ingrese el nombre del producto \n Leche \n Yerba \n Pan \n Terminar");
            break;
        }while(yerbaMate >0);
    } 
    while(ingProducto == "Yerba" && yerbaMate <= 0){
        alert("Se han agotado las Yerba, seleccione otro producto");
        var ingProducto = prompt("Ingrese el nombre del producto \n Leche \n Yerba \n Pan \n Terminar")
    } 
    


    if(ingProducto == "Pan" && pan > 0){ 
        alert(`Seleccionaste ${ingProducto}`);
        
        do{
        cantidad = prompt("Ingrese Cantidad (maximo 10)");
        if(cantidad > 10){
            alert("Maximo 10 productos")
            cantidad = prompt("Ingrese Cantidad (maximo 10)")
        }
        pan = pan - cantidad;
        alert(`Quedan ${pan} Pan en stock`);
        ingProducto = prompt("Ingrese el nombre del producto \n Leche \n Yerba \n Pan \n Terminar");
        break;
        }while(StockSevenup > 0);
    } while(ingProducto == "Pan" && pan === 0){
        alert("Se han agotado el Pan, seleccione otro producto")
        var ingProducto = prompt("Ingrese el nombre del producto \n Leche \n Yerba \n Pan \n Terminar")
    } 


    if(ingProducto === "Terminar"){
        alert("Muchas Gracias por su compra");
        break;
    }



}
    


    if( leche <= 0 && yerbaMate <= 0 && pan <= 0){
        alert("Se acabaron los Productos. Muchas gracias por su compra")
    }


/*
//while(StockCocacola > 0 && StockPepsi > 0 && StockSevenup > 0){//
alert(`Seleccionaste ${ingProducto}`);


if(ingProducto = "Coca cola" && StockCocacola >0){
    do{
    alert(`Quedan ${StockCocacola} Coca cola en stock`);
    StockCocacola = StockCocacola - 1;
    }while(ingProducto == "Coca cola" && StockCocacola >0);

}else if(ingProducto == "Pepsi" && StockPepsi == 0){
    do{  
    alert(`Quedan ${StockPepsi} Pepsi en stock`);
        StockPepsi = StockPepsi - 1;
    }while(ingProducto = "Pepsi" && StockPepsi > 0);

}else if(ingProducto = "Seven-up" && StockSevenup > 0){
do{
    alert(`Quedan ${StockSevenup} Seven-up en stock`);
    StockSevenup = StockSevenup - 1;
    }while(ingProducto = "Seven-up" && StockSevenup > 0);}
    
    

    

var ingProducto = prompt("Ingrese el nombre del producto \n Coca cola \n Pepsi \n Seven-up")
alert(`Seleccionaste ${ingProducto}`);


if(ingProducto = "Coca cola" && StockCocacola == 0){
    do{
    alert("No hay mas cocas. Elegi otro producto");
    var ingProducto = prompt("Ingrese el nombre del producto \n Pepsi \n Seven-up")
}while(ingProducto == "Coca cola");
}else if(ingProducto = "Pepsi" && StockPepsi == 0){
    do{
    alert("No hay mas Pepsis. Elegi otro producto");
    var ingProducto = prompt("Ingrese el nombre del producto \n Coca cola \n Seven-up")
}while(ingProducto == "Pepsi" & StockPepsi == 0);
}else if(ingProducto = "Seven-up" && StockPepsi == 0){
    do{
    alert("No hay mas Pepsis. Elegi otro producto");
    var ingProducto = prompt("Ingrese el nombre del producto \n Coca cola \n Pepsi");
    }while(ingProducto == "Seven-up" && StockSevenup == 0)
}


if(StockCocacola == 0 && StockPepsi == 0 && StockSevenup == 0){
    alert("No hay mas productos para elegir")
}
*/
