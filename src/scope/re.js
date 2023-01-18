//Var
var car = 'Audi'; // Declaración y asignación
car = 'Porshe'; //Reasignación
console.log(car);

var car = 'Chevrolet';//Redeclaración
console.log(car);
//Usando la palabra reservada var para la declaración de variables, se puede hacer reasignación y redeclaración.

//Let
let car = 'Audi'; //Declaración y asignación
car = 'Porshe'; //Reasignación
console.log(car);

let car = 'Chevrolet'; //La redeclaración usando let no es posible porque let tiene un scope de bloque.
console.log(car);
//Usando la palabra reservada let para la declaración de variables, se puede hacer reasignación, pero no la redeclaración.

//Const
const car = 'Audi'; //Declaración y asignación
car = 'Porshe'; //Reasignación
console.log(car);

const car = 'Chevrolet'; //Redeclaración
console.log(car);
//Usando la palabra reservada const para la declaración de variables, no se puede hacer reasignación ni la redeclaración.