import express from "express";
import cors from "cors";
import connectDb from "./db";
import { startConsumer } from "./events/consumer";

const app = express();

app.use(express.json());
app.use(cors());

startConsumer();

app.listen(5001, () => {
  connectDb();
  console.log("Server running in port 5001");
});
