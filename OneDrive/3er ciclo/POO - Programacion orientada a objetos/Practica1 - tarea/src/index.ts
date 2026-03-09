// Ejercicio1
// class Empleado{
//     nombre: string;
//     salarioBase: number;
//     horasExtras: number;
//     pagoPorHoraExtra: number = 5.25; // 

//     constructor(nombre: string, salarioBase: number, horasExtras: number) {
//         this.nombre = nombre;
//         this.salarioBase = salarioBase;
//         this.horasExtras = horasExtras;
//     }

//     calcularSalarioTotal(): number {
//         return this.salarioBase + (this.horasExtras * this.pagoPorHoraExtra);
//     }

//     mostrarInfo(): void {
//         console.log(`Empleado: ${this.nombre}`);
//         console.log(`Salario Total: $${this.calcularSalarioTotal()}`);
//     }
// }

// const empleado1 = new Empleado("Yami", 500, 10);
// empleado1.mostrarInfo();

// EJERCICIO2
// class CuentaBancaria{
//     titular: string;
//     saldo: number;

//     constructor(titular: string){
//         this.titular = titular;
//         this.saldo = 0; 
//     }

//     depositar(monto: number): void{
//         if (monto > 0) {
//             this.saldo += monto;
//             console.log(`Depósito exitoso: $${monto}`);
//         } else {
//             console.log("Monto inválido");
//         }
//     }

//     retirar(monto: number): void{
//         if (monto > 0 && monto <= this.saldo) {
//             this.saldo -= monto;
//             console.log(`Retiro exitoso: $${monto}`);
//         }else{
//             console.log("Fondos insuficientes o monto inválido");
//         }
//     }

//     consultarSaldo(): void{
//         console.log(`Saldo actual: $${this.saldo}`);
//     }
// }

// const cuenta1 = new CuentaBancaria("Yami");
// cuenta1.depositar(200);
// cuenta1.retirar(50);
// cuenta1.consultarSaldo();

// EJERCICIO 3
// class Vehiculo {
//     marca: string;
//     modelo: string;
//     año: number;

//     constructor(marca: string, modelo: string, año: number){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//     }

//     mostrarInfo(): void {
//         console.log(`Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`);
//     }
// }

// const carro1 = new Vehiculo("Toyota", "Corolla", 2020);
// const carro2 = new Vehiculo("Honda", "Civic", 2022);

// carro1.mostrarInfo();
// carro2.mostrarInfo();

// EJERCICIO4
// class ProductoTienda {
//     nombre: string;
//     precio: number;

//     constructor(nombre: string, precio: number) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }

//     aplicarDescuento(porcentaje: number): number {
//         const descuento = (this.precio * porcentaje) / 100;
//         return this.precio - descuento; 
//     }

//     mostrarInfo(): void {
//         console.log(`Producto: ${this.nombre}, Precio original: $${this.precio}`);
//     }
// }

// const producto1 = new ProductoTienda("Zapatos", 50);
// producto1.mostrarInfo();
// console.log(`Precio con 20% de descuento: $${producto1.aplicarDescuento(20)}`);

// ejercicio5
class Personaje{
    nombre: string;
    nivel: number;

    constructor(nombre: string){
        this.nombre = nombre;
        this.nivel = 1;
    }

    subirNivel(): void {
        this.nivel += 1;
        console.log(`${this.nombre} ha subido de nivel. Su nivel actual es de: ${this.nivel}`);
    }

    verEstado(): void {
        console.log(`Personaje: ${this.nombre}, Nivel: ${this.nivel}`);
    }
}

const heroe = new Personaje("Mario bros");
heroe.verEstado();
heroe.subirNivel();
heroe.subirNivel();
heroe.verEstado();