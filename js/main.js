//Declarar variables
let opción = 1;
let costo = 0;
let producto = 0;
let ciclo = true;
let carrito = "";
let Producto1 = 0; 
let Producto2 = 0; 
let Producto3 = 0; 
let Producto4 = 0; 
const arrayproductos =[{id:1, nombre:"Producto 1", precio:100},{id:2, nombre:"Producto 2", precio:200},{id:3, nombre:"Producto 3", precio:300},{id:4, nombre:"Producto 4", precio:400}]

//Función menú
function menú() {
    return parseFloat(prompt("Bienvenido, selecciona tu opción deseada: \n1. Agregar producto\n2. Eliminar producto\n3. Ver carrito de compras\n4. Salir\nTu precio total actualmente es de: $" + costo));}

//Función suma
function calculocarrito() {
    costo = (Producto1*100)+(Producto2*200)+(Producto3*300)+(Producto4*400)
    carrito= Producto1 + " Producto 1\n" + Producto2 +" Producto 2\n" + Producto3 + " Producto 3\n" + Producto4 + " Producto 4" }

//Función resta
function resta(x) {
    switch (x){
        case 1:
            if (Producto1>0){
                Producto1 -= 1;}
            else {alert("No tienes este producto")}
            break;
        case 2:
            if (Producto2>0){
                Producto2 -= 1;}
            else {alert("No tienes este producto")}
            break;
        case 3: 
            if(Producto3>0){
                Producto3 -= 1;}
            else {alert("No tienes este producto")}
            break;
        case 4:
            if (Producto4>0){
                Producto4 -= 1;;}
            else {alert("No tienes este producto")}
            break;
        default: 
            alert("Opción no válida")
            break;
    }}

while (ciclo) {
    calculocarrito();
    opción = menú();
    switch (opción){
        case 1: 
            producto = parseFloat(prompt("Elige el producto que quieras: \n1. Producto 1\n2. Producto 2\n3. Producto 3\n4. Producto 4"));
            switch (producto){
            case 1: 
                Producto1 += 1;
                break;
            case 2:
                Producto2 += 1;
                break;
            case 3: 
                Producto3 += 1;
                break;
            case 4: 
                Producto4 += 1;
                break;
            default: 
                alert("No contamos con ese producto")
                break;}
            break;
        case 2: 
            producto = parseFloat(prompt("Elige el producto que quieras eliminar: \n1. Producto 1\n2. Producto 2\n3. Producto 3\n4. Producto 4"));
            resta(producto)
            break;
        case 3:
            alert(carrito)
            break;
        case 4: 
            ciclo = false;
            break;
        default: 
            alert("Esa no es una opción válida, selecciona otra por favor.");
            break;}
}
