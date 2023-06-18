import fs from 'fs';
export default class ProductManager{
    constructor(path)
    {
        this.products = [],
        this.path = path

        
    }
    //metodo para agregar productos
    async addProduct (title, description, price, thumbnail,code,stock) {
     try{
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        const products = await this.getProducts()
        if (products.length === 0){
            product.id = 1
        } else {
            product.id = products [products.length-1 ].id + 1
        }
        const verificar = products.find(product => product.code === code)
    
        if(title && description && price && thumbnail && code && stock !== undefined && !verificar){
              
        products.push(product)
        
       await fs.promises.writeFile(this.path, JSON.stringify(products, null ,'\t'))
            
    
        }else{
           console.log('not found')
        }
    }
     catch(error){
        console.log(error)

}
}
    //metodo para traer todos los productos
    async getProducts () {
    try {
        if(fs.existsSync(this.path)){

            let resultado = await fs.promises.readFile(this.path, 'utf-8')
            let productos = await JSON.parse(resultado)
            return productos
        }else{
            return []
        }
    }
    catch(error){
        console.log(error);
    }
    
}
    //metodo para traer los productos por id
    async getProductById (idProduct) {
    try{
        let resultado = await this.getProducts()
        let p = resultado.find(product => product.id === idProduct)
        if (p) {
            return p
        } else {
            return console.error("Not Found")
        }
    
    }catch(error){
        console.log(error);
    }

   
}   
    //metodo para modificar por id
    async updateProduct (id, campo) {

    try {
        let products = await this.getProducts()
        let product = products.find( p => p.id == id )
        const arrayFiltrado = products.filter( p => p.id != id)

        let nommbreCampo = Object.keys(campo)[0]
        let valorCampo = Object.values(campo)[0]

        product[nommbreCampo] = valorCampo

        products = [
            ...arrayFiltrado,
            product
        ]

        await fs.promises.writeFile(this.path, JSON.stringify(products, null ,'\t'))
        return products

    } catch (err) {
        console.log(err)
    }

} 
 
    //metodo para borrar un producto
    async deleteProduct (id) {
    try{

        const products = await this.getProducts()
        const indice = products.findIndex(product => product.id === id)
        if(indice < 0){
            return console.log('Su producto no fue encontrado')
        }
       
        products.splice(indice, 1)
    
        await fs.promises.writeFile(this.path, JSON.stringify(products, null ,'\t'))
        return products
    }
    catch (err){
        console.log(err);
    }
}

}

// const agregarProductos = async () => {
//     try{
//         await manejadorProductos.addProduct ('corven', 'corven110', 580000, 'sin imágen', '345', 36 );
//         await manejadorProductos.addProduct ('zanella', 'zanela 110',500400, 'sin imágen', '346', 30 );
//         await manejadorProductos.addProduct ('zanella', 'zanella 150', 1000200 , 'sin imágen', '347', 15 );
//         await manejadorProductos.addProduct ('zanella', 'zanella 200', 12200000, 'sin imagen','348', 90);
//         await manejadorProductos.addProduct ('Honda', 'biz 110', 780000, 'sin imágen', '349', 50 );
//         await manejadorProductos.addProduct ('Honda', 'cg titan',1250400, 'sin imágen', '350', 32 );
//         await manejadorProductos.addProduct ('Honda', 'xr 125', 1500200 , 'sin imágen', '351', 15 );
//         await manejadorProductos.addProduct ('Honda', 'tornado 250', 22200000, 'sin imagen','352', 17);
//         await manejadorProductos.addProduct ('Honda', 'cb 500', 4580000, 'sin imágen', '353', 8 );
//         await manejadorProductos.addProduct ('corven', 'corven 125',800400, 'sin imágen', '354', 29 );
//         await manejadorProductos.addProduct ('corven', 'corven 150', 1200200 , 'sin imágen', '355', 15 );
//         await manejadorProductos.addProduct ('corven', 'corven 200', 12500000, 'sin imagen','356', 90);
//     }
        
//     catch(e) {
//         console.log(e);
//     }

// }
// //funcion para invocar el metodo de getProducts (traer productos)
// const traerProductos = async() =>{
//     try{
//          let traer = await manejadorProductos.getProducts()
//          console.log(traer)
//     }
//     catch (err) { console.log(err) }
// }
// //funcion para invocar el metodo de getProductsById (traer productos por un id especificado)
// const productosId = async () => {
//     try{
//         let traer = await manejadorProductos.getProductById(1)
//         console.log(traer)
//    }
//    catch (err) { console.log(err) }
// }
// //funcion para invocar el metodo de deleteProduct (borrar un producto por id)
// const deleteProductos = async () => {
//     try{
//          let traer = await manejadorProductos.deleteProduct(1)
//          console.log(traer)
//    }
//    catch (err) { console.log(err) }

// }
// //funcion para invocar el metodo de updateProduct (modificar un producto por id y campo)
// const modificar = async() => {
//     try{
//         let traer = await manejadorProductos.updateProduct( 3 , {stock :102})
//         console.log(traer)
//   }
//   catch (err) { console.log(err) }

// }

