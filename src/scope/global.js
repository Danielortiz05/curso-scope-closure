// Global Scope 


var nombre = "Daniel"; //Se realiza la declaración y la asignación de la variable nombre.

function printName (){
    console.log(nombre)
}

printName();

//Global scope: Las variables son de scope tipo global cuando su declaración se realiza en cualquier parte 
//del código sin que haga parte de una función o algún bloque de código. 

// La función puede acceder a la variable nombre porque ella esta declarada de manera global.

//El scope también puede ser global cuando se realiza la asignación a una variable sin que esta sea declarada aún así esté dentro de una función o bloque de código.

//Ejemplo:

function showLastName (){
    lastName = 'Ortiz';
    console.log(lastName);

}

console.log(lastName)