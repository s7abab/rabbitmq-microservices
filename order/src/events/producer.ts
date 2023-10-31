import { setupRabbitMQ } from "./rabbitmq";

export const sendMessage = async (message: any) => {
  const { channel } = await setupRabbitMQ();
  const queue = "PRODUCT";

  await channel.assertQueue(queue, { durable: false });
  await channel.sendToQueue(queue, Buffer.from(message));

  console.log(`Message sent: ${message}`);
};

