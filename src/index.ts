

interface IReproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: IDetalles

}

interface IDetalles {
    autor: string;
    anio: number;
}

const reproductor: IReproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// const { volumen, segundo, cancion, detalles: { autor }, detalles: {anio} } = reproductor;
const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;
const { anio } = detalles;




console.log(`El volumen actual de: ${volumen}`);
console.log(`El segundo actual de: ${segundo}`);
console.log(`La canción actual de: ${cancion}`);
console.log(`El autor es: ${autor}`);
console.log(`El año es: ${anio}`)