import express from 'express';
import productsRouter from '../src/routes/products.router.js';
import cartRouter from '../src/routes/cart.router.js';


//Invocamos a express y guardamos su valor en una variable
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended:true}))

app.use('/api/products', productsRouter); 
app.use ('/api/carts', cartRouter); 

//levantamos localhost en el puerto 8080
app.listen(8080 , (req , res) =>{console.log('levantando el puerto 8080')})
