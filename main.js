
var misCuadernos = [];
var CuadernoUno = ["Tipo Agenda", "Paisajes", "Cuadriculado", "De dibujo"];
var CuadernoDos = ["Argollado", "Tipo Folder" , "Rayado" , "Ferrrocarril"];

function imprimirLista(CuadernoUno, CuadernoDos){
    //metodo para unir los 2 arrays
    misCuadernos = CuadernoUno.concat(CuadernoDos);
    console.log(misCuadernos);
    // array como cadena string separados por caracteres
    console.log(misCuadernos.join("---"));
}
imprimirLista(CuadernoUno, CuadernoDos)