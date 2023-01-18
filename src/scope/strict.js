//JavaScript tiene un modo estricto, lo que permite que las variables necesariamente sean declaradas, entre otras funcionalidades, por ende no
//es posible solo asignar las variables porque de inmediato se puede elevar un error de referencia.
'use strict';

let name = 'Daniel';
console.log(name);

function name(){
    'use strict';
    let firstName = 'Daniel';
    console.log(firstName);
}