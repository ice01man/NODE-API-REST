import { Router} from "express"

const router = Router();

import * as productController from "../controllers/products.controller.js";
import {auth} from "../middlewares/auth.middlewares.js"

router.get("/products", productController.getAllProdcuts)

router.get('/products/search', productController.getSearchProducts )

router.get("/products/:id", productController.getProductId)

router.post("/products",auth, productController.postProduct )

router.put("/products/:id", auth, productController.putProduct)

router.delete('/products/:id',auth, productController.deleteProduct)




export default router;