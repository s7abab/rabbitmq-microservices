import amqp from "amqplib"

async function connectToRabbitMQ() {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queueName = 'myQueue';
    await channel.assertQueue(queueName, { durable: false });

    console.log("Connected to rabbitMQ $$$$$$$$")
    return { connection, channel };
  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
    throw error;
  }
}

export default connectToRabbitMQ;
