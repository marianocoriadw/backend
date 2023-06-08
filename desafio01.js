class ProductManager{
    constructor()
    {
        this.products = [];
        
    }



getProducts = () => {
    return this.products;
}



addProduct = (title, description, price, thumbnail,code,stock) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: [] 
    }

    if (this.products.length === 0){
        product.id = 1
    } else {
        product.id = this.products [this.products.length-1 ].id + 1
    }

   
    this.products.push(product)
}

 

getProductById = (idProduct) =>{
    const productIndex = this.products.findIndex(product => product.id === idProduct); 

    if (productIndex === -1){
        console.log("Not found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd){
        console.log ("El producto se agregó correctamente");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};

const manejadorProductos = new ProductManager ();
manejadorProductos.addProduct ('corven', 'corven110', 580000, 'sin imágen', '345', 36 );
manejadorProductos.addProduct ('zanella', 'zanela 110',500400, 'sin imágen', '346', 30 );
manejadorProductos.addProduct ('zanella', 'zanella 150', 1000200 , 'sin imágen', '347', 15 );

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);


console.log(manejadorProductos.getProducts());