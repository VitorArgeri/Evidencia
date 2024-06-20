//Movimento uniformemente variado s = s0 + v0 * t + 1/2 a * t²

let s0 = 10;
let v0 = 0;
let t = 10;
let a = 2;

let posiçãofinal = s0 + v0 * t + ((a * (t * t)) / 2);
console.log(posiçãofinal);
