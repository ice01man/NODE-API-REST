import * as services from "../services/products.services.js"

export const getAllProdcuts = (req, res) => { res.json(services.getAllProducts())}

export const getSearchProducts =  (req, res)=>{
    //http://localhost:3000/products/search?nombre=Disco SSD Samsung 1TB
    console.log(req.query)
    const {nombre , precio, cantidad} = req.query
    const filtered = productos.filter((item) => 
        item.nombre.toLowerCase(). includes(nombre.toLowerCase())
    )
    res.json(filtered)
}
export const getProductId = (req,res)=>{
    const {id} = req.params
    const product = productos.find((item) => item.id == id)
    if (!product){
        res.status(404).json({ error:"El Producto No existe"})
    }
    res.json(product) 
}

export const postProduct = (req, res) => {
    console.log(req.body)
    const {nombre, precio, cantidad} = req.body

    const NewProd = {
        id : productos.length +1,
        nombre,
        precio,
        cantidad
    }

    productos.push(NewProd);
    res.status(201).json(NewProd)
    
};

export const putProduct =  (req,res)=>{
    const prodId = parseInt(req.params.id, 10)
    const prodIndex = productos.findIndex((item)=> item.id === prodId);

    if (prodIndex === -1){
        return res.status(404).json({error: "Producto no encontrado"})
    }
    const {nombre, precio, cantidad} = req.body
    productos[prodIndex]= {id: prodId, nombre, precio, cantidad}

    res.json(productos[prodIndex])
}

export const deleteProduct = (req,res) => {
    const prodId = parseInt(req.params.id, 10)
    const prodIndex = productos.findIndex((item)=> item.id === prodId);

    if (prodIndex === -1){
        return res.status(404).json({error: "Producto no encontrado"})
    }
    
    productos.splice(prodIndex,1 )
    res.status(204).send();

}