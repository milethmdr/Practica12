// Codifique un Ejercicio donde el objeto necesite 5 atributos como: nombre, apellido, teléfono, correo, 
// codIdentificacion. Solamente el ultimo atributo debe de tener su modificador como privado. Imprima en pantalla los 
// atributos del objeto sin utilizar métodos.


// Codifique un Ejercicio donde se evalué el precio a pagar por un producto, los atributos pueden ser a su criterio, tomar en cuenta que se debe de
//  manejar un parámetro descuento que seria un porcentaje, el parámetro se debe de enviar en la función no debe de inicializarse con el objeto. 
// El método que cree debe de mostrar el siguiente mensaje:
// ****Cantidad de producto: cantidad*****
// ****Precio: $Precio******
// ****Descuento: $descuento****
// ****Iva: $iva****
// ****Total a pagar******
// class pago{
//     cantidadproducto: number;
//     precio: number;
//     tasaIVA: number;

//     constructor(cantidadproducto: number, precio: number, tasaIVA: number = 0.13){
//         this.cantidadproducto = cantidadproducto;
//         this.precio = precio;
//         this.tasaIVA = tasaIVA;
//     }

//     calcularPago(descuento: number): void {
//         const subtotal = this.cantidadproducto * this.precio;
//         const montoDescuento = subtotal * (descuento / 100);
//         const montoIVA = subtotal * this.tasaIVA;
    
//         const totalPagar = subtotal - montoDescuento + montoIVA;
//         console.log("****Cantidad de producto: " + this.cantidadproducto + "*****");
//         console.log("****Precio: $" + subtotal.toFixed(2) + "******");
//         console.log("****Descuento: $" + montoDescuento.toFixed(2) + "****");
//         console.log("****Iva: $" + montoIVA.toFixed(2) + "****");
//         console.log("****Total a pagar: $" + totalPagar.toFixed(2) + "****");
//     }
// }

// let producto = new pago(1, 5.50, 0.13);
// producto.calcularPago(10);

// Codifique un Ejercicio en el cual se pueda verificar la edad de una persona utilizando solamente la fecha de nacimiento, 
// y calcular su estado por medio de la edad, si es 0 a 2 años = bebe , mayor de 2 a 10 es niño/niña, mayor de 10 a 14 = pre adolescente, 
// mayor de 14 a 17 = adolescente, mayor e igual a 18 a 30= joven, mayor de 30 a 50 = adulto, de 50 en adelante = adulto mayor.
class Edad{
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;

    constructor(nombre: string, apellido: string, fechaNacimiento: Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
 }
}


let persona= new Edad('Yamileth', 'Medrano', (new Date('2006/05/30'))); 