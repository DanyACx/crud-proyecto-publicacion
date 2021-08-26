const path = require('path');
const express = require('express'); // utilizar express
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express(); // se inicializa (app: aplicación de servidornode)

// conectando a bd
mongoose.connect(`mongodb+srv://Fisi:Fisi123@cluster0.jridy.mongodb.net/proyecto_dad?retryWrites=true&w=majority`)
    .then(db => console.log('BD Conectada'))
    .catch(err => console.log(err))


// importando rutas FE
const indexRoutes = require('./routes/index');


// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // especifico donde se encuentra la carpeta views, se concatena la ruta
//console.log(path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // expres ya conoce, no es necesario require arriba

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // entiende los datos que envia un formulario html

//rutas
app.use('/', indexRoutes); // cada vez que un usuario ingrese a la ruta principal del servidor, se van utilizar rutas

// inicia el servidor
app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`);
});