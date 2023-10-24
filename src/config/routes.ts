import { Application } from "express";
import userRoutes from "../routes/user.routes";
import productsRoutes from "../routes/products.routes";
import authRoutes from "../routes/auth.routes";

export const register = async (app: Application) => {
  app.use("/usuarios", userRoutes);
  app.use("/productos", productsRoutes);
  app.use("/auth", authRoutes);
  console.log("🟢 Routes registered");
};
