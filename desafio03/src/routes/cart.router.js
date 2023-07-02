import { Router } from "express";
import __dirname from "../utils.js";
import CartManager from "../manager/cartManager.js"

const router = Router()

const manejadorCart = new CartManager(`${__dirname}/files/productosCart.json`)

router.post('/' , async (req , res)=>{
    const cart = {
      products: []
    }
    const resultado = await manejadorCart.save(cart)
    res.send({status: 'success' , resultado})
})

router.get('/:id', async (req, res) => {
    const cartId = Number(req.params.id)
    const cart = await manejadorCart.getById(cartId)
    if (!cart){
        res.status(400).send({ error : 'Cart no encontrado' })
    }
    res.send({ status : 'sucess' , cart })
})



export default router