class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    //Destructuracion de objetos
    addProduct({title, description, price, thumbnail, code, stock}) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }
        // === devuelve true or false pero convierte entre tipos primero
        const codeRepetido = this.products.some(product => product.code === code);
        if (codeRepetido) {
            console.log(`Ya existe un producto con el codigo ${code}`);
            return;
        }

        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);

        if (!product) {
            return "Not found";
        }

        return product;
    }
}

const manager = new ProductManager();

manager.addProduct({
    title: "Jamon",
    description: "es un jamon",
    price: 100,
    thumbnail: "ruta.jpg",
    code: "ABC123",
    stock: 3
})

manager.addProduct({
    title: "Paleta",
    description: "No es un jamon",
    price: 50,
    thumbnail: "ruta.jpg",
    code: "ABC124",
    stock: 3
})

console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(2));
console.log(manager.getProductById(99));