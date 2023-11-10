function count(n){
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function repetirArray(arreglo){
    let arr = arreglo;

    return arr;
}

function convertirString(arr){
    let result = arr.map(element => element.toString());

    return result;
}

console.log(convertirString([1,5,7]));