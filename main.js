
var misCuadernos = [];
var listaUno = ["Tipo Agenda", "Paisajes", "Cuadriculado", "De dibujo"];
var listaDos = ["Argollado", "Tipo Folder" , "Rayado" , "Ferrrocarril"];

function imprimirLista(listaUno, listaDos){
    //metodo para unir los 2 arrays
    misCuadernos = listaUno.concat(listaDos);
    console.log(misCuadernos);
    // array como cadena string separados por caracteres
    console.log(misCuadernos.join("---"));
}
imprimirLista(listaUno, listaDos)


//se crea una lista de objetos pensando en el proyecto

const listaUtiles = [];
class Cuadernos{
    nombre;
    precio;
    stock;
    constructor (precio, nombre, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let CuadernoUno = new Cuadernos (17000, "Agenda", 15);
let CuadernoDos = new Cuadernos (4800, "Stickers",6);
let CuadernoTres = new Cuadernos (10500, "5 Materias", 21);
let CuadernoCuatro = new Cuadernos (2800, "Argollado", 7);

//Se agregan los objetos a listaUtiles
listaUtiles.push (CuadernoUno);
listaUtiles.push (CuadernoDos);
listaUtiles.push (CuadernoTres);
listaUtiles.push (CuadernoCuatro);

// Para mostrar los objetos de la listaUtiles;
for (let i=0; i<listaUtiles.length;i++){
    console.log(listaUtiles[i])
}
