require('dotenv').config()
const express = require('express');
const cors = require('cors'); //Hacer uso de CORS
const app = express();

const dbConnect = require('./config/mongo')

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// Aquí invocamos a las rutas

// TODO localhost/api/
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.info(`Aplicación iniciada en http://localhost:${port}`)
});

dbConnect();