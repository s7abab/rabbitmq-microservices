import connectToRabbitMQ from "./rabbitmq";

export async function sendMessage(message: any) {
    try {
      // Connect to RabbitMQ
      const { channel } = await connectToRabbitMQ();

      const queueName = "PRODUCT";
      // Send a message to the queue
      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
      console.log(`Sent message: "${message}" to queue: ${queueName}`);
    
      channel.close();
    } catch (error) {
      console.error("Error sending message to RabbitMQ:", error);
    }
  }
  