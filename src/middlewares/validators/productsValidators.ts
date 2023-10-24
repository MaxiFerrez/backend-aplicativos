import { check, ValidationChain } from "express-validator";

export const createProductsValidators: Array<ValidationChain> = [
  check("nombre").isLength({ min: 3, max: 20 }).withMessage("El nombre debe tener mas de 3 y menos de 20 caracteres"),
  check("descripcion").isLength({ min: 10 }).withMessage("La descripcion debe tener al menos 10 caracteres"),
  check("precio").custom((value) => {
    if (value >= 0) {
      return true;
    } else {
      throw new Error("El precio debe ser un número positivo");
    }
  }),
  check("imagenUrl").isURL().withMessage("La imagenUrl debe ser una URL válida"),
];

export const mongoIdValidator: ValidationChain =
check("id").isMongoId().withMessage("No es un Id valido de mongo");
