import fs from 'fs';
export default class CartManager {
    constructor(path) {
        this.carts = [];
        this.path = path;
    }

    async save(cart) {
        if (this.carts.length === 0) {
            cart.id = 1;
        } else {
            cart.id = this.carts[this.carts.length - 1].id + 1;
        }

        this.carts.push(cart);

        await fs.promises.writeFile(this.path, JSON.stringify(this.carts, null ,'\t'))

        return cart;
        
    }
    async getProducts(){
        try{
            if(fs.existsSync(this.path)){
            let resultado = await fs.promises.readFile(this.path , 'utf-8')
            let productos = JSON.parse(resultado)
            return productos
        }}
        catch{

        }
    }
    async getById(id) {
        const productos= await this.getProducts()
        const cart =  productos.find(cart => cart.id === id);
        return cart;
    }
}