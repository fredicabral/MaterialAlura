// Parâmetros de Função


// // let numero1 = 50;
// // let numero2 = 50;

// console.log(soma(2, 10));


// function comissao() {
//     return((venda * percentual) / 100)
// }

// let venda = 10000;
// let percentual = 2;

// console.log(comissao())

// parâmetros x argumentos

// ordem dos parâmentros

// function nomeIdade(nome, idade) {
//     return`meu nome é ${nome} e minha idade é ${idade}`;
// }

// let nome = "Fred";
// let idade = 31;
// console.log(nomeIdade(nome, idade));

function soma(numero1, numero2) {
    return (numero1 + numero2);
}

function multiplica(numero1 = 1, numero2 = 1) {
    return (numero1 * numero2);
}

console.log(multiplica(soma(3, 3)));