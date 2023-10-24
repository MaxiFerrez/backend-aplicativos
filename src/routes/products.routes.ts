import { Router } from "express";
import * as productController from "../controllers/products.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
    createProductsValidators,
    mongoIdValidator,
  } from "../middlewares/validators/productsValidators";
  import { handleValidationErrors } from "../middlewares/validation.middleware";

const router = Router();//.use(authMiddleware);

// OBTENER TODOS
router.get("/", productController.index);

// CREAR
router.post("/",
authMiddleware,
...createProductsValidators,
handleValidationErrors,
 productController.create);

 
// OBTENER UNO
router.get("/:id",

mongoIdValidator,
handleValidationErrors, 
productController.show);

// BORRAR
router.delete("/:id",
authMiddleware,
mongoIdValidator,
handleValidationErrors,
productController.destroy);

export default router;