import * as models from "../models/products.model.js"

export const getAllProdcuts = async (req, res) => {
    try{
        const products = await models.getAllProducts()
        res.json(products)
    }catch(err){
        res.json({error: "Error al buscar los productos"})
    }
}

export const getSearchProducts = async (req, res)=>{
    //http://localhost:3000/products/search?nombre=Disco SSD Samsung 1TB
    //console.log(req.query)
    const {name , category} = req.query

    console.log(req.query)
    if (!category){
        let xxname= await models.searchProduct("name", name)
        res.json(xxname)
    } 
     if (!name) {
        let xxcategory = await models.searchProduct("category", category)
        res.json(xxcategory)
    }    
}

export const getProductId = async (req,res)=>{
    const id  = req.params.id;
    console.log("controller: ", id)
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
        res.status(500).json({ message: err.message });
    }
   
}

export const postProduct = async (req, res) => {
    console.log(req.body)
    const {name, price, quantity, category} = req.body

    const product = await models.postNewProduct({name, price, quantity, category})

    res.status(201).json(product);

};

export const putProduct =  (req,res)=>{
    const prodId = parseInt(req.params.id, 10)
    const prodIndex = productos.findIndex((item)=> item.id === prodId);

    if (prodIndex === -1){
        return res.status(404).json({error: "Producto no encontrado"})
    }
    const {name, price, quantity,category} = req.body

        
    productos[prodIndex]= {id: prodId, name, price, quantity,category}

    res.json(productos[prodIndex])
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