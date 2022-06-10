// tipo de dado
// booleanos

// conversao implicita
const numero = 456;
const numeroString = Number("456");
const usuarioConectado = true;


//Number()
//String()

//console.log(numero == numeroString);
console.log(usuarioConectado.toString());

// console.log(numero + numeroString.toString());
// console.log(numero + numeroString);


// conversao explicita
var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi);

}
console.log(respostaDeTudo, idade, pi);