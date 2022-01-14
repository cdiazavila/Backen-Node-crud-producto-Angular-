const express = require('express');
const bodyParser = require('body-parser');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creamos el servidor
const app = express();
// habilitar cors
//  app.use( cors(corsOptions) );
app.use(cors());

// Conectamos a la BD
conectarDB();

app.use(express.json());
// habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})