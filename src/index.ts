

// console.log('Hola Mundo!!!!');

/*
    ===== Código de TypeScript =====
*/


function sumar(a: number, b:number): number{
    return a + b;
}
const sumarFlecha = (a: number,b: number):number => {
    return a + b
}

function multiplicar(numero: number,otroNumero?: number,base:number = 2):number{
    return numero + base;
}
const resultado = multiplicar(10,20);

console.log(resultado)