import { Router } from "express";

import {createNewProducts, getProducts} from "../controllers/products.controller";

const router = Router();

router.get("/products",getProducts);

router.post("/products",createNewProducts);

router.get("/products",);

router.delete("/products",);

router.put("/products",);



export default router;
