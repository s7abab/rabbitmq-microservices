import { Request, Response } from "express";
import productModel from "../models/product.model";

export const saveProducts = async (message: any) => {
  try {
    console.log(message);
    const product = await productModel.create({
      _id: message.productId,
      name: message.productName,
      price: message.price,
    });
    console.log("produt saved");
  } catch (error: any) {
    console.log(error);
  }
};


export const order = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess:false,
      error
    });
  }
}
