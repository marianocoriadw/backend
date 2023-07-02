import { Router } from "express";
import express from 'express';
import __dirname from "../utils.js";
import ProductManager from '../manager/productManager.js';

const router = Router()
router.use(express.json());

// router.post('/',(req, res) =>{
//     const product = req.body
//     products.push(product)
//     res.send({status: "success" , message: "Product agregado correctamente"})
// });
const manejadorProductos = new ProductManager (`${__dirname}/files/productos.json`);// Pasamos la ruta por parametro

router.get('/' , async (req ,res) =>{
    const products = await manejadorProductos.getProducts();
    const  limit = Number(req.query.limit);
    if(limit){
        products = products.slice(0, limit)
    }
    
    res.send({products})
    
})

router.get('/:id' , async (req ,res) =>{
    const userId = Number(req.params.id)
    const products = await manejadorProductos.getProducts()
    if(userId <= products.length){
        const producto = await manejadorProductos.getProductById(userId);
        res.send({producto})
    }else{
        res.send({error : 'el producto no existe'});
    }
})

router.post('/' , async (req, res) => {
    const product = req.body
    const productos = await manejadorProductos.getProducts()
    if(productos.length === 0) {
        product.id = 1
    }else{
        product.id = productos[productos.length - 1].id + 1
    }
    if(!product.status){
        product.status = true
    }
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock || !product.category){
        res.status(400).send({ error : 'Campos incompletos'});
    }
    await manejadorProductos.addProduct({...product});
    res.send({status: "success" , product})
})

router.put('/:id' , async (req, res) => {
    const userId = Number(req.params.id)
    const campo = req.body
    const producto = await manejadorProductos.getProductById(userId)
    if(producto){
        await manejadorProductos.updateProduct(userId, campo)
        res.send({status: "sucess" , ...campo})
    }else{
        res.status(400).send({ error : 'Producto no encontrado'});
    }


})

router.delete('/:id', async(req, res) => {
    const userId = Number(req.params.id)
    const producto = await manejadorProductos.getProductById(userId)
    if(producto){
        await manejadorProductos.deleteProduct(userId)
        res.send({status: "success"})
    }else{
        res.status(400).send({ error : 'Producto no encontrado'});
    }
})

export default router