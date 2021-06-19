const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // define como van a lucir los datos

const publicacionSchema = new Schema({
    titulo: String,
    subtitulo: String,
    descripcion: String,
    estado: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('publicacion', publicacionSchema); // se utliza el esquema, para almacenar en la coleccion
