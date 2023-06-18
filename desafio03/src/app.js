import express from 'express';
import ProductManager from './manager/productManager.js';

//Invocamos a express y guardamos su valor en una variable
const app = express();

// Insantanciamos la class ProductManager y guardarmos su valor en una variable
const manejadorProductos = new ProductManager ('./src/files/productos.json');// Pasamos la ruta por parametro

app.use(express.urlencoded({ extended:true}))

//levantamos localhost en el puerto 8080
app.listen(8080 , (req , res) =>{console.log('levantando el puerto 8080')})


//creamos el endpoint (ruta) y validamos para traer todos los productos o el query.limit
app.get('/products' , async (req ,res) =>{
    const products = await manejadorProductos.getProducts();
    const  limit = Number(req.query.limit);
    if(limit){
        products = products.slice(0, limit)
    }
    res.send({products})
    
})


// Parametro req.params por id
app.get('/products/:id' , async (req ,res) =>{
    const userId = Number(req.params.id)
    const products = await manejadorProductos.getProducts()
    if(userId <= products.length){
        const producto = await manejadorProductos.getProductById(userId);
        res.send({producto})
    }else{
        res.send({error : 'el producto no existe'});
    }
})



