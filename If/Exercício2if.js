//Mostrar se a palavra é grande ou não e se for, mostrar ela invertida
let palavra = "Ola"

if(palavra.length < 6){
    console.log("A palavra é pequena");
    console.log(palavra)
} else {
    console.log("a palavra é grande");
    let palavraReversa = palavra.split('').reverse('').join('');
    console.log(palavraReversa);
}