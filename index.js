const ProductManager = require("./ProductManager.js");
let productManager = new ProductManager();
console.log(productManager);



let persistirProduct = async () => {
    let product = await productManager.createProduct('Chocolate', 'Chocolate cacao Vida', 500, "http://chocolate.png", "CH50CO", 20);

    console.log(product)

    let products = await productManager.getProducts();
    console.log(`Productos encontrados en Product Manager: ${products.length}`);
    console.log(products);

    let foundProduct = await productManager.getProductById('CH50CO');
    console.log("Producto encontrado por ID:");
    console.log(foundProduct);

    await productManager.updateProduct('CH50CO', { price: 500, description: 'Chocolate cacao Vida' });

    await productManager.deleteProduct('CH50CO');
};

    



persistirProduct();