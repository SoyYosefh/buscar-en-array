// 8. Crea un arreglo de nombres y dada una cadena con un nombre,
// verifica si ese nombre está presente en el arreglo y muestra
// un mensaje apropiado.

const nombres = ['Fernando', 'Jessica', 'Mayte', 'Alexis', 'Alonso', 'Jose', 'Gustavo', 'Emiliano'];

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un nombre: ', (nombre) => {
    if (nombres.includes(nombre)) {
        console.log(`El nombre ${nombre} está presente en el arreglo.`);
    } else {
        console.log(`El nombre ${nombre} no está presente en el arreglo.`);
    }
    rl.close();
});