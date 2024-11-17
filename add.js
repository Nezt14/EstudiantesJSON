const fs = require(`fs`)
const fileName = `Estudiantes.json`

function AddEstudiante(){
fs.readFile(fileName, 'utf-8', (err, content) => {

if (err) {
    console.log('Error al leer el archivo JSON', err)
    return;
}

    const Estudiantes = JSON.parse(content)
    const nuevoEstudiante = { id: 4, nombre: 'Angel', apellido: 'Heske', edad: 19, curso:`Filosofia` }
    Estudiantes.push(nuevoEstudiante)

    fs.writeFile(fileName, JSON.stringify(Estudiantes, null, 2), (err) => {
        if (err) {
            console.log('Error al escribir archivo JSON', err)
        } console.log('Nuevo Estudiante agregado al archivo JSON')
    })
})

}
module.exports = AddEstudiante;