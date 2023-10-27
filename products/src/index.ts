import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route"
import connectDb from "./db";
import connectToRabbitMQ from "./rabbitmq";

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/product', productRouter);


// -------------------------
async function receiveMessage() {
  try {
    // Connect to RabbitMQ
    const { channel, connection } = await connectToRabbitMQ();

    const queueName = 'myQueue';

    // Ensure that the queue exists (it should have been created during the send operation as in the previous answer)
    await channel.assertQueue(queueName, { durable: false });

    console.log(`Waiting for messages in queue: ${queueName}`);

    // Define a callback function to handle incoming messages
    const handleMessage = (msg:any) => {
      const message = msg.content.toString();
      console.log(`Received message: "${message}"`);
      // You can add your message processing logic here
    };

    // Consume messages from the queue
    channel.consume(queueName, handleMessage, { noAck: true });

    // You can add additional code here if needed to perform other tasks while waiting for messages

  } catch (error) {
    console.error('Error receiving messages from RabbitMQ:', error);
  }
}

receiveMessage();

// -------------------------
const PORT = 4000;
app.listen(PORT, ()=>{
    connectDb();
    console.log(`Server running in port ${PORT}`);
})