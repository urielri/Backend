import express from "express";
import { ProductsManager } from "../ProductsManager.js"
import { v4 } from "uuid";
import path from "path";

const productRouter = express.Router();
const data = path.resolve(process.cwd(), "public", "products.json");
const productsManager = new ProductsManager(data);

//new ProductsManager(path.resolve(process.cwd(), "public", "products.json"));



productRouter.get("/", async (req, res) => {
    const { limit } = req.query;

    try {
        const products = await productsManager.getAll();

        if (limit) {
            res.send(products.slice(0, limit));
            return;
        }
        res.send(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

productRouter.get("/:pid", async (req, res) => {
    const { pid } = req.params;

    try {
        const products = await productsManager.getAll();

        const product = products.find((product) => product.id === pid);
        if (!product) {
            res.status(400).send("Producto no encontrado");
            return;
        }
        res.send(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

productRouter.post("/", async (req, res) => {
    const newProduct = {
        id: v4(),
        ...req.body,
    };

    try {
        const products = await ProductsManager.getAll();
        await ProductsManager.writeAll([...products, newProduct]);
        res.send(newProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

productRouter.put("/:pid", async (req, res) => {
    const { pid } = req.params;
    const newProduct = req.body;

    try {
        const products = await ProductsManager.getAll();
        const productIndex = products.findindex((product) => product.id === pid);
        if (productIndex === -1) {
            res.status(400).send("Producto no encontrado");
            return;
        }

        products[productIndex] = newProduct;
        await ProductsManager.writeAll(products);
        res.send(newProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

productRouter.delete("/pid", async (req, res) => {
    const { pid } = req.params;

    try {
        const products = await ProductsManager.getAll();
        const productIndex = products.findindex((product) => product.id === pid);
        if (productIndex === -1) {
            res.status(400).send("Producto no encontrado");
            return;
        }

        products.splice(productIndex, 1);
        await ProductsManager.writeAll(products);
        res.send("Producto eliminado");
    } catch (err) {
        res.status(500).send(err.message);
    }
})

export default productRouter;