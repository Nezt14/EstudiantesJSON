const fs = require(`fs`)
const fileName = 'Estudiantes.json'

function deleteEstudiante() {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
            console.log('Error al leer el archivo JSON:', err);
            return;
        }
        try {
            const Estudiantes = JSON.parse(data);

            const idEliminar = 2;
            const indice = Estudiantes.findIndex(Estudiante => Estudiante.id === idEliminar)

            Estudiantes.splice(indice, 1)

            fs.writeFile(fileName, JSON.stringify(Estudiantes, null, 2), (err) => {
                if (err) {
                    console.log(`Error al escribir archivo JSON:`, err);
                } else {
                    console.log(`Estudiante eliminado del archivo JSON exitosamente`);
                }
            });

        } catch (error) {
            console.error(`Error al parsear el JSON:`, error);
        }
    });
}
module.exports = deleteEstudiante