const fs = require('fs')
const fileName = 'Estudiantes.json'

function read() {
    fs.readFile(fileName, 'utf-8', (err, content) => {

        if (err) {
            console.log('Error al leer el archivo JSON', err)
            return;
        }
        try {

            const objectJSON = JSON.parse(content)
            console.log('Cantidad de estudiantes: ', objectJSON)
        } catch (error) {
            console.log('Error al parsear el JSON', error)
        }
    })
}
module.exports = read