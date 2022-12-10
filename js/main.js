//Declarar variables
let opción = 1;
let costo = 0;
let producto = 0;
let ciclo = true;

//Función menú
function menú() {
    return parseFloat(prompt("Bienvenido, selecciona tu opción deseada: \n1. Agregar producto\n2. Salir\nTu precio total actualmente es de: $" + costo));}

while (ciclo) {
    opción = menú();
    switch (opción){
        case 1: 
            producto = prompt("Elige el producto que quieras: \n1. Producto 1\n2. Producto 2\n3. Producto 3\n4. Producto 4");
            if (producto==1){
                (costo = costo + 100);}
            if (producto==2){
                (costo = costo +200);}
            if (producto==3){
                (costo = costo + 300);}
            if (producto==4){
                (costo = costo +400);}
            break;
        case 2: 
            ciclo = false;
            break;
        default: 
            alert("Esa no es una opción válida, selecciona otra por favor.");
            break;}
}
