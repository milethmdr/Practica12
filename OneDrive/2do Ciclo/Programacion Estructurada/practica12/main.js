//funcion de un semaforo
import { stdin, stdout } from 'process'
import readline from 'readline'

const rl = readline.createInterface({
     input: stdin,
     output: stdout
 })

// rl.question("Elige el color del semaforo", (color)=>{
//     switch (color) {
//         case 'rojo':
//             console.log("Elegiste el semaforo color rojo 🔴")
//             break;
//         case 'amarillo':
//             console.log("Elegiste el semaforo color ${color} 🟡")
//             break;
//         case 'verde':
//             console.log("Elegiste el semaforo color verde 🟢")
//             break;

//             default:
//                 console.log("Error de color, no existe")
//                 break;
//     }
//     rl.close()
// })

// let rutasBuses = ["90B", "90G, 90F", "90FA", "90D"]

// for(let i = 0; i < rutasBuses.length; i++){
//     console.log("Ruta :", rutasBuses[i])
//     console.log("Item", i)
// }

//CONTADOR
// rl.question("Ingrese hasta q numero quiere q llegue el contador", (num)=>{
//     let toNum = parseInt(num)
//     for(let i = 0; i <= toNum;i++){
//         if(i % 2 !== 0){
//             console.log(i)
//         }
//         rl.close()
//     }
// })

//for of
for (let nombre of nombres){
    console.log('Un saludo para-', nombre)
}
//
let student = {
    nombre: "Juan",
    edad: 23,
    carrera: "Software",
    promedio: 6.0
}
for (const propiedad in student){
    console.log(`${propiedad}: ${student[propiedad]}`)
}

