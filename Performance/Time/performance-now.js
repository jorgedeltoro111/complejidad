//Complejidad temporal
function count(n){
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
//Ahora vamo a utilizar la funcion para medir el tiempo
let start = performance.now();
count(5);
let finish = performance.now();

let total = finish - start;

console.log('Total time: ' + total + 'ms');