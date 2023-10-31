// rabbitmq.js
import amqp from "amqplib";

export const setupRabbitMQ = async () => {
  const connection = await amqp.connect("amqp://localhost"); // Replace with your RabbitMQ server's URL
  const channel = await connection.createChannel();
  return { connection, channel };
};
