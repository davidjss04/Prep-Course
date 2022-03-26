// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  function claveValor(objeto){

    const entries = Object.entries(objeto);
    return entries;
  }

  return claveValor(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let object = {};

  for (let index = 0; index < string.length; index++) {
    if(!object[string.charAt(index)]){
      object[string.charAt(index)] = 0;
    }

    object[string.charAt(index)] += 1;
  }

  return object;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí


  var partUppercase = '';
  var partLowercase = '';

  for (let index = 0; index < s.length; index++) {
    if(s.charAt(index) == s.charAt(index).toUpperCase()){
      partUppercase = partUppercase.concat(s.charAt(index));
    }

    if(s.charAt(index) == s.charAt(index).toLowerCase()){
      partLowercase = partLowercase.concat(s.charAt(index));
    }
  }

  s = partUppercase + partLowercase;

  return s;
}


function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var numberLeft = 0;
  var newStr = '';
  var space = '';

  for (let index = 0; index < str.length; index++) {
    if(str.charAt(index) === ' '){
        if(numberLeft != 0) space = ' ';
        newStr = newStr+ space + str.substring(numberLeft,index).split('').reverse().join('');
        numberLeft = index + 1;
        console.log(newStr);
        console.log(numberLeft);
      }
    }
    newStr = newStr+ ' ' + str.substring(numberLeft,str.length).split('').reverse().join('');
    return newStr;
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numberReverse = numero.toString().split('').reverse().join('');

  if(numero === Number(numberReverse)) return 'Es capicua'

  return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var newStr = '';

  for (let index = 0; index < cadena.length; index++) {
    if((cadena.charAt(index) != 'a') && (cadena.charAt(index) != 'b') && (cadena.charAt(index) != 'c')){
      newStr = newStr + cadena.charAt(index);
      console.log(newStr);
    }
  }
  return newStr;
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i].length > arr[j].length){
        let auxiliar = arr[i];
        arr[i] = arr[j];
        arr[j] = auxiliar;
      }
    }
  }

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí


  var newArreglo = [];

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]){
        newArreglo.push(arreglo1[i]);
      }
    }
  }

  return newArreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

