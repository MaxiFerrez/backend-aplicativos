"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductsSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del producto es obligatorio"],
    },
    descripcion: {
        type: String,
        required: [true, "La descripcion es obligatoria"],
    },
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio"],
        validate: {
            validator: function (value) {
                return value >= 0; // Verifica si el valor es mayor o igual a cero
            },
            message: "El precio no puede ser negativo",
        },
    },
    imagenUrl: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lmsvlIvBPm_6grhc3MpJ9LnJAvK1JXaKaA&usqp=CAU",
    },
}, {
    timestamps: { createdAt: true, updatedAt: true },
});
exports.default = (0, mongoose_1.model)("Products", ProductsSchema);
