import express from "express";
import productRouter from "./routes/products.js"

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use('api/products', productRouter);

const port = 8080;
app.listen(port, () => {
    console.log('Servidor en puerto 8080');
})