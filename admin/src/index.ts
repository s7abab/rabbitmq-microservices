import express from "express";
import cors from "cors";
import adminRouter from "./routes/admin.route"
import connectDb from "./db";

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/admin', adminRouter);

app.listen(4001, ()=>{
    connectDb();
    console.log('Server running in port 4001');
})