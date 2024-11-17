
const fs = require(`fs`)
const fileName = 'Estudiantes.json'

function update(){


fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error al leer el archivo JSON: `, err);
        return;
    }

    const Estudiantes = JSON.parse(data);
    Estudiantes[0].edad = 22;

    fs.writeFile(fileName, JSON.stringify(Estudiantes, null, 2), (error) => {
        if (error) {

            console.error('Error al escribir el archivo JSON:', error);
            return;
        }
        console.log(`Archivo JSON actualizado exitosamente.`)
    });
});
}

module.exports = update