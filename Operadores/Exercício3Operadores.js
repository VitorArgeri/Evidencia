//Calcular média
let numeros = [2, 2, 2, 2, 10]
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

let resultado = soma / numeros.length;
console.log(resultado);