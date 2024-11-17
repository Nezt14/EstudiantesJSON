const fs = require(`fs`)
const fileName = `Estudiantes.json`

function contar() {
    fs.readFile(fileName, `utf-8`, (err, content) => {
        if (err) {
            console.log(`error al leer el archivo JSON`, err);
            return;
        }
        const Estudiantes = JSON.parse(content);
        console.log(`La cantidad de estudiantes es de:  ${Estudiantes.length}`)
    })
}
module.exports = contar