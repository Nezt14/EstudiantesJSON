const fs = require(`fs`)
const fileName = `Estudiantes.json`;
const Estudiantes = [
    { id: 1, nombre: 'Nestor', apellido: 'Martinez', edad: 19, curso:`Ing. en sistemas` },
    { id: 2, nombre: 'Josue', apellido: 'Rivera', edad: 22, curso:`Ing. en programacion` },
    { id: 3, nombre: 'Carlos', apellido: 'Ramirez', edad: 18, curso:`Ing. en sistemas` }
];
function create(){
fs.writeFile(fileName, JSON.stringify(Estudiantes, null, 2), (err) => {
    if(err) {
        console.log('Error al crear archivo JSON:', err);
    } else {
        console.log(`Archivo JSON creado exitosamente con tres Estudiantes iniciales`);
            }
});
}
module.exports = create