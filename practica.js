class   ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts= () =>{
        return this.products;
    }

    addProduct = (title,description,price, thumbnail,code,stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            products : [],
        }
        if(this.products.length === 0){
            product.id = 1
        }else{
           product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product)

    }

    getProductById(id){
        const productIndex = this.products.findIndex(p => p.id === id)

        if(productoEncontrado === -1){
            console.log("Not found")
        }

        const productoEncontrado = this.products[productIndex].products.includes(id)

        if(productoEncontrado){
            console.log("Encontrado")
        }
    }

}

