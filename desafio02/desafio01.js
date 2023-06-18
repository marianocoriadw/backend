const fs = require('fs');

class ProductManager{
    constructor(path)
    {
        this.products = [],
        this.path = path

        
    }

addProduct = async (title, description, price, thumbnail,code,stock) => {
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


getProducts = async () => {
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

 

getProductById = async (idProduct) =>{
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
updateProduct = async(id, campo) => {

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
 

deleteProduct = async(id) => {
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

const manejadorProductos = new ProductManager ('./productos.json');

const agregarProductos = async () => {
    try{
        await manejadorProductos.addProduct ('corven', 'corven110', 580000, 'sin imágen', '345', 36 );
        await manejadorProductos.addProduct ('zanella', 'zanela 110',500400, 'sin imágen', '346', 30 );
        await manejadorProductos.addProduct ('zanella', 'zanella 150', 1000200 , 'sin imágen', '347', 15 );
        await manejadorProductos.addProduct ('zanella', 'zanella 200', 12200000, 'sin image','asdasdasd3', 90)
        await manejadorProductos.addProduct ('zanella',90)
    }
    catch(e) {
        console.log(e);
    }

}

const traerProductos = async() =>{
    try{
         let traer = await manejadorProductos.getProducts()
         console.log(traer)
    }
    catch (err) { console.log(err) }
}
const productosId = async () => {
    try{
        let traer = await manejadorProductos.getProductById(1)
        console.log(traer)
   }
   catch (err) { console.log(err) }
}
const deleteProductos = async () => {
    try{
         let traer = await manejadorProductos.deleteProduct(1)
         console.log(traer)
   }
   catch (err) { console.log(err) }

}
const modificar = async() => {
    try{
        let traer = await manejadorProductos.updateProduct( 3 , {stock :102})
        console.log(traer)
  }
  catch (err) { console.log(err) }

}

//agregarProductos()
//traerProductos()
 //productosId()
//deleteProductos()
//modificar()