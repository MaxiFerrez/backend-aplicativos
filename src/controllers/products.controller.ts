import { Request, Response, NextFunction } from "express";
import Products from "../models/products.model";
import IProducts from "../interfaces/products.interface";

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Products.find();
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nombre, descripcion, precio, imagenUrl } = req.body;

    const product: IProducts = new Products({
      nombre,
      descripcion,
      precio,
      imagenUrl,
    });

    await product.save();

    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    if (!product) return res.status(404).json("Not existe");
    await product.deleteOne();
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};
