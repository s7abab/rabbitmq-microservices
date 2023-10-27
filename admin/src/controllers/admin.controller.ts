import { Request, Response } from "express";
import productModel from "../models/product.model";

interface IProduct {
  name: string;
  price: number;
}

export const addProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body as IProduct;

  if (!name || !price) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid product data" });
  }

  try {
    const product = await productModel.create({
      name,
      price,
    });

    res.status(201).send({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getproducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.find();

    res.status(200).send({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};
