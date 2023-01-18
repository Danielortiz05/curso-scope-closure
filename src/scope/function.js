// Function scope o local scope: Las variables definidas dentro de una función van a tener un alcance dentro de esa misma función y los bloques o funciones
// anidadas que hagan parte de ella.

//Ejemplo:

function showFirstName(){
    let firstName = 'Daniel';
    console.log(firstName);

    if(firstName === 'Daniel'){
        console.log(firstName);
    }else{
        console.log('No coinciden')
    }
}

showFirstName();

//Por ello, si se quisiera acceder a la variable declarada y asignada dentro de una función fuera de ella daría como
// resultado un error de referencia porque Javascript en su scope global no tiene una referencia a la variable que se invoca.
//Ejemplo:

console.log(firstName);