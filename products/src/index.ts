import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route";
import connectDb from "./db";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRouter);

// -------------------------
//recienve msg

// -------------------------
const PORT = 4000;
app.listen(PORT, () => {
  connectDb();
  console.log(`Server running in port ${PORT}`);
});
