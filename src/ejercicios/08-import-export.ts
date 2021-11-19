import { IProducto, calculaISV } from './07-desestructuracion-funcion';


const carritoCompras: IProducto [] = [
    {
        desc: 'Telefono 1',
        precio: 100
    }, 
    {
        desc: 'Telefono 2',
        precio: 150
    },
];

const [total, isv] = calculaISV( carritoCompras );

console.log( 'Total: ', total);
console.log('ISV: ', isv)