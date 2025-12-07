import { stdin, stdout } from 'process'
import readline from 'readline'

const rl = readline.createInterface({
     input: stdin,
     output: stdout
 })

// Suma de números naturales: Solicita un número N y usa un ciclo (for/while) para
// sumar los números del 1 al N.
// function sumaNaturales(N){
//     let suma = 0;
//     for (let i = 1; i <= N; i++){
//         suma += i;
//     }
//     return suma;
// }

// Tabla de multiplicar: Solicita un número y muestra su tabla de multiplicar del 1 al 10 usando un ciclo for.

// function tablaMultiplicar(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }

//Contador de pares e impares: Pide 10 números, cuenta cuántos son pares y cuántos impares usando while.
// function contarParesImpares(numeros) {
//     let pares = 0, impares = 0;
//     let i = 0;
//     while (i < numeros.length){
//         if (numeros[i] % 2 === 0) {
//             pares++;
//         } else {
//             impares++;
//         }
//         i++;
//     }
//     console.log(`Pares: ${pares}, Impares: ${impares}`);
// }

//Contador regresivo: Muestra los números desde N hasta 1 usando for y luego con while.
// function contadorRegresivo(N) {
//     console.log("Usando for:");
//     for (let i = N; i >= 1; i--) {
//         console.log(i);
//     }
//     console.log("Usando while:");
//     let j = N;
//     while (j >= 1) {
//         console.log(j);
//         j--;
//     }
// }

//Cálculo de factorial: Solicita un número y calcula el factorial usando un ciclo.
// function factorial(N) {
//     let resultado = 1;
//     for (let i = 1; i <= N; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }

//Sumar hasta que sea negativo: Pide números hasta que el usuario ingrese uno negativo y suma los valores introducidos.
// function sumarHastaNegativo(callback) {
//     let suma = 0;
//     function pedirNumero() {
//         rl.question("Ingrese un número (negativo para terminar): ", (numInput) => {
//             const num = parseInt(numInput);
//             if (num < 0) {
//                 console.log(`La suma total es: ${suma}`);
//                 callback();
//             } else {
//                 suma += num;
//                 pedirNumero();
//             }
//         });
//     }
//     pedirNumero();
// }

//Promedio con ciclo do-while: El usuario ingresa calificaciones (números positivos).
// El ciclo termina si la calificación es negativa. Calcula el promedio de los valores introducidos.
function promedioCalificaciones(callback) {
    let suma = 0, contador = 0;
    function pedirNota() {
        rl.question("Ingrese una calificación (negativa para terminar): ", (notaInput) => {
            const nota = parseFloat(notaInput);
            if (nota < 0) {
                if (contador > 0) {
                    console.log(`Promedio: ${(suma / contador).toFixed(2)}`);
                } else {
                    console.log("No se ingresaron calificaciones válidas.");
                }
                callback();
            } else {
                suma += nota;
                contador++;
                pedirNota();
            }
        });
    }
    pedirNota();
}


