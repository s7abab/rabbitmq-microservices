import { saveProducts } from "../controllers/order.controller";
import { setupRabbitMQ } from "./rabbitmq";

export const startConsumer = async () => {
  const { channel } = await setupRabbitMQ();
  const queue = "PRODUCT";

  await channel.assertQueue(queue, { durable: false });

  channel.consume(queue, (msg) => {
    if (msg !== null) {
      const contentString = msg.content.toString();
      const message = JSON.parse(contentString);
      console.log(`Received message: ${message.productName}`);

      // Process the message as needed
      if (message.type === "PRODUCT-ADDED") {
        saveProducts(message);
      }

      channel.ack(msg); // Acknowledge the message when it's processed
    }
  });
};
