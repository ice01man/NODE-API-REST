import * as models from "../models/products.model.js"

export const getAllProdcuts = async (req, res) => {
    try{
        const products = await models.getAllProducts()
        res.json(products)
    }catch(err){
        res.json({error: "Error al buscar los productos"})
    }
}

export const getSearchProducts = async (req, res) => {   
    const { name } = req.query;
    const paramNames = Object.keys(req.query);

    const products = await models.getAllProducts()
    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
     );

     res.json(filteredProducts);
};

export const getProductId = async (req,res)=>{
    const id  = req.params.id;
   
    try{
        if (!id) {
            return res.status(400).json({ message: 'ID de producto no proporcionado.' });
        }
        const product = await models.getProductByid(id);

        if (!product) {
            res.status(404).json({ error: "No existe el producto" });
        }
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: `Producto con ID ${productId} no encontrado.` });
        }
    } catch (err) {
        res.status(500).json({ error: "No existe el producto" });
    }
   
}

export const postProduct = async (req, res) => {
    
    const {name, price, quantity, category} = req.body

    const product = await models.postNewProduct({name, price, quantity, category})
    
    res.status(201).json(product);

};

export const putProduct = async (req,res)=>{
    const prodId = req.params.id
   
    const {name, price, quantity,category} = req.body
    const productData = {name, price, quantity,category}

    const UpdateProd = await models.updateProduct(prodId,productData)    
    
    res.json(UpdateProd)
}

export const deleteProduct = async (req,res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(400).json({ message: 'ID de producto no proporcionado.' });
        }
        const result = await models.deleteProduct(productId);
        if (!result) { 
            return res.status(404).json({ message: `Producto con ID ${productId} no encontrado.` });
        }
        res.status(200).json({ message: `Producto con ID ${productId} eliminado correctamente.` });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
   
}