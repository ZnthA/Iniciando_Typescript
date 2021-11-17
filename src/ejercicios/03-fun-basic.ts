

// console.log('Hola Mundo!!!!');

/*
    ===== Código de TypeScript =====
*/


function sumar1(ab: number, bd:number): number{
    return ab + bd;
}
const sumarFlecha1 = (ab: number,bd: number):number => {
    return ab + bd
}

function multiplicarR(numero1: number,otroNumero1?: number,base1:number = 2): number{
    return numero1 * base1;
}
const resultado1 = multiplicarR(5,0,10);

console.log(resultado1)