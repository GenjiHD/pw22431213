import express from 'express';
// Creamos la aplicacion a traves del paquete express
// y llamamos a su constructor
const app = express();

// Todo lo que regresa al usuario es de tipo JSON
app.use(express.json());

// Puerto para escuchar las peticiones del front-end
const port = 3001;

// Ruta
app.get('/hola',(_req,res) => {
    let date = new Date().toLocaleDateString();
    res.send('mundo con la fecha '+date+" con TypeScript");
});

// Activar el servidor y lo ponemos en escucha
app.listen(port, () => {
    console.log(`Server is listening in the port ${port}`);
});