"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoIdValidator = exports.createProductsValidators = void 0;
const express_validator_1 = require("express-validator");
exports.createProductsValidators = [
    (0, express_validator_1.check)("nombre").isLength({ min: 3, max: 20 }).withMessage("El nombre debe tener mas de 3 y menos de 20 caracteres"),
    (0, express_validator_1.check)("descripcion").isLength({ min: 10 }).withMessage("La descripcion debe tener al menos 10 caracteres"),
    (0, express_validator_1.check)("precio").custom((value) => {
        if (value >= 0) {
            return true;
        }
        else {
            throw new Error("El precio debe ser un número positivo");
        }
    }),
    (0, express_validator_1.check)("imagenUrl").isURL().withMessage("La imagenUrl debe ser una URL válida"),
];
exports.mongoIdValidator = (0, express_validator_1.check)("id").isMongoId().withMessage("No es un Id valido de mongo");
