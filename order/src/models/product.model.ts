import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProducts extends Document {
  id: string;
  name: string;
  price: string;
}

const productSchema: Schema<IProducts> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add an name"],
  },
  price: {
    type: String,
  },
});

const productModel: Model<IProducts> = mongoose.model<IProducts>(
  "Product",
  productSchema
);
export default productModel;
