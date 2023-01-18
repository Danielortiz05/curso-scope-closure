//El scope de bloque permite a las variables ser referenciadas por el código que compone el bloque donde han sido declaradas, pero en caso de que
//se quieran referenciar fuera del bloque de código se presentará un error de referencia.
//Los bloques de código son aquellos que están delimitados por llaves.
//Al declarar una variable con las palabras reservadas var, let y const puede llevar a resultados diferentes.
//Al usar var en un bloque dentro de una función está variable va poder ser referenciada incluso fuera del bloque de código teniendo un scope local
//pero si se usa let o const mantienen un scope de bloque.
//Ejemplo


function pets(){
    
    if(true){
        var cat = 'Cat'; //Scope local
        let dog = 'Dog'; //Scope de bloque
        const fish = 'Fish'; //Scope de bloque
        console.log(dog);
        console.log(fish);  
    }

    console.log(cat);
    
}


pets();