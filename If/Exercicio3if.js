//Separar números negativos e positivos
let numeros = [-2, -1, 0, 1, 2];
let positivos = [];
let negativos = [];
let zero = [];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0){
        positivos.push(numeros[i]);
    } else if(numeros[i] == 0){
        zero.push(numeros[i]);
    } else {
        negativos.push(numeros[i])
    }
}

console.log(positivos);
console.log(negativos);
console.log(zero);


