
const readline = require('readline');

const create = require('./create');
const AddEstudiante = require('./add');
const read = require('./read');
const contar = require('./count');
const deleteEstudiante = require('./delete');
const update = require(`./update`)
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});
function showMenu() {
    console.log('\n— Menú —');
    console.log('1. Crear archivo JSON');
    console.log('2. Leer archivo JSON');
    console.log(`3. Agregar estudiante`)
    console.log('4. Actualizar lista');
    console.log(`5. Eliminar Estudiante`);
    console.log('6. contar Estudiantes');
     console.log('7. Salir');
}

function handleMenuOption(option) {
    switch (option) {
        case `1`:
            create();
            break;
            case `2`:
            read();
            break;
            case `3`:
            AddEstudiante();
            break;
            case `4`:
            update();
            break;
            case `5`:
            deleteEstudiante();
            break;
            case `6`:
            contar();
            break;
            case `7`:
                console.log(`Saliendo del programa`)
            rl.close();
            return;
    
        default:
            break;
    }
    setTimeout(promptMenu, 1500);
}
function promptMenu(){
    showMenu();
    rl.question(`seleccione una opcion: `, handleMenuOption);
}

promptMenu();