import express from "express";
import productRouter from "./routes/products.js"
import cart from "./routes/cart.js"
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use(morgan("dev"));

app.use('/api/products', productRouter);
app.use('/api/carts', cart)

const port = 8080;
app.listen(port, () => {
    console.log('Servidor en puerto 8080');
})