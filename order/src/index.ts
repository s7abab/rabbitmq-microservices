import express from "express";
import cors from "cors";
import connectDb from "./db";
import connectToRabbitMQ from './rabbitmq';

const app = express();

app.use(express.json());
app.use(cors())

// rabbit-----------
async function sendMessage() {
  try {
    // Connect to RabbitMQ
    const { channel } = await connectToRabbitMQ();

    const queueName = 'myQueue';
    const message = 'Hello, RabbitMQ!';

    // Send a message to the queue
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Sent message: "${message}" to queue: ${queueName}`);

    // Close the channel and connection when done (optional)
    channel.close();
    // connection.close(); // You can close the connection if you don't need it anymore
  } catch (error) {
    console.error('Error sending message to RabbitMQ:', error);
  }
}
// rabbit----------------

app.listen(5001, ()=>{
    connectDb();
    connectToRabbitMQ();
    console.log('Server running in port 5001');
sendMessage();

})