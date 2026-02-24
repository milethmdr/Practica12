"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
//  class Programa {
//      private rl: readline.Interface;
//      constructor() {
//          this.rl = readline.createInterface({
//              input: process.stdin,
//              output: process.stdout
//          });
//      }
//    }
//     iniciar(): void {
//         this.pedirNumero();
//     }
//     pedirNumero(): void {
//         this.rl.question("Ingresa un número: ", (respuesta: string) => {
//             const numero = Number(respuesta);
//             this.evaluarNumero(numero);
//             this.cerrar();
//         });
//     }
//     evaluarNumero(numero: number): void {
//         if (numero > 10) {
//             console.log("Es mayor que 10");
//         } else if (numero === 10) {
//             console.log("Es igual a 10");
//         } else {
//             console.log("Es menor que 10");
//         }
//       }
//       cerrar():void{
//          this.rl.close();
//       }
// }
// const app = new Programa();
// app.iniciar();
// EJERCICIOS
//  Desarrollar una aplicación en consola que permita ingresar la nota de un 
// estudiante y determinar su estado académico. 
// Usar if / else if para clasificar: 
// • 9 – 10 = Excelente 
// • 7 – 8.9 = Bueno 
// • 6 – 6.9 = Regular 
// • Menor a 6 = Reprobado
// class ProgramaNotas {
//     private rl: readline.Interface;
//     constructor() {
//         this.rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//     }
//     iniciar(): void {
//         this.pedirNota();
//     }
//     pedirNota(): void {
//         this.rl.question("Ingrese la nota del estudiante: ", (respuesta: string) => {
//             const nota = Number(respuesta);
//             this.evaluarNota(nota);
//             this.cerrar();
//         });
//     }
//     evaluarNota(nota: number): void {
//         if (nota >= 9 && nota <= 10) {
//             console.log("Excelente");
//         } else if (nota >= 7 && nota < 9) {
//             console.log("Bueno");
//         } else if (nota >= 6 && nota < 7) {
//             console.log("Regular");
//         } else if (nota < 6) {
//             console.log("Reprobado");
//         } 
//     }
//     cerrar(): void {
//         this.rl.close();
//     }
// }
// const app = new ProgramaNotas();
// app.iniciar();
//2
// Desarrollar un sistema de autenticación que valide usuario, contraseña.  
// Si el login es correcto, mostrar el rol al que pertenece el usuario: 
// • 1 = Administrador 
// • 2 = Cliente 
// • 3 =1 Invitado 
// Si el usuario no existe, mostrar mensaje de usuario incorrecto.
class Sistema {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirUsuario();
    }
    pedirUsuario() {
        this.rl.question("Usuario: ", (usuario) => {
            this.rl.question("Contraseña: ", (clave) => {
                this.validarLogin(usuario, clave);
                this.cerrar();
            });
        });
    }
    validarLogin(usuario, clave) {
        // Usuarios registrados
        if (usuario === "admin" && clave === "1234") {
            console.log("Login correcto. Rol: Administrador");
        }
        else if (usuario === "cliente" && clave === "abcd") {
            console.log("Login correcto. Rol: Cliente");
        }
        else if (usuario === "invitado" && clave === "aaee") {
            console.log("Login correcto. Rol: Invitado");
        }
        else {
            console.log("Usuario incorrecto o contraseña inválida.");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const app = new Sistema();
app.iniciar();
//# sourceMappingURL=index.js.map