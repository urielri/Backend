import express from "express";

const app = express();
const PORT = 8080;


const productos = [
    {
        "id": 1,
        "title": "Naranja",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 1,
        "stock": 1
    },
    {
        "id": 2,
        "title": "Arandano",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 2,
        "stock": 1
    },
    {
        "id": 3,
        "title": "Cereza",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 3,
        "stock": 1
    },
    {
        "id": 4,
        "title": "Ciruela",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 4,
        "stock": 1
    },
    {
        "id": 5,
        "title": "Mandarina",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 5,
        "stock": 1
    },
    {
        "id": 6,
        "title": "Manzana",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 6,
        "stock": 1
    },
    {
        "id": 7,
        "title": "Melon",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 7,
        "stock": 1
    },
    {
        "id": 8,
        "title": "Pera",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 8,
        "stock": 1
    },
    {
        "id": 9,
        "title": "Pomelo",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 9,
        "stock": 1
    },
    {
        "id": 10,
        "title": "Sandia",
        "description": "Jugasa",
        "price": 15,
        "thumbnail": "https://img.freepik.com/foto-gratis/uvas-fresas-pina-kiwi-albaricoque-platano-pina-entera_23-2147968680.jpg?w=2000",
        "code": 10,
        "stock": 1
    }
]

app.get("/productos", (req, res) => {
    try {
        const products = productos;
        const limit = req.query.limit;
        let limitedProducts;
        if (limit) {
            limitedProducts = products.slice(0, limit);
        }
        res.send(limitedProducts || products)
    } catch (err) {
        res.status(500).send(err.message);
    }

});

app.get("/productos/:id", (req, res) => {
    const producto = productos.find((u) => u.id == req.params.id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

app.listen(PORT, () => {
    console.log('Servidor iniciado en puerto' + PORT)
});

