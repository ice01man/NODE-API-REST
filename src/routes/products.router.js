import { Router} from "express"

const router = Router();

import * as productController from "../controllers/products.controller.js";

router.get("/products", productController.getAllProdcuts)

router.get('/products/search', productController.getSearchProducts )

router.get("/products/:id", productController.getProductId)

router.post("/products", productController.postProduct )

router.put("/products/:id", productController.putProduct)

router.delete('/products/:id',  productController.deleteProduct)




export default router;