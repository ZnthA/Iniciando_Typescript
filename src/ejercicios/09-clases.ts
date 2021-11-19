

class PersonaNormal{
    constructor(
        public nombre: string, 
        public direccion: string
        ){}
}



class Heroe extends PersonaNormal{
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ) {
            super(nombreReal, 'New York, USA');
        }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);


// class Heroe {
//     alterEgo: string;
//     edad: number;
//     nombreReal: number;

//     constructor( alterEgo: string) {
//         this.alterEgo = alterEgo
//     }
// }

// const ironman = new Heroe('Ironman');
// console.log(ironman);