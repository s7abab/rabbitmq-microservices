import connectToRabbitMQ from "./rabbitmq";

async function receiveMessage() {
    try {
      // Connect to RabbitMQ
      const { channel, connection } = await connectToRabbitMQ();
  
      const queueName = "PRODUCT";
      await channel.assertQueue(queueName, { durable: false });
      console.log(`Waiting for messages in queue: ${queueName}`);
      // Define a callback function to handle incoming messages
      const handleMessage = (msg: any) => {
        const message = msg.content.toString();
        console.log(`Received message: "${message}"`);
        // You can add your message processing logic here
      };
      // Consume messages from the queue
      channel.consume(queueName, handleMessage, { noAck: true });
      // You can add additional code here if needed to perform other tasks while waiting for messages
    } catch (error) {
      console.error("Error receiving messages from RabbitMQ:", error);
    }
  }
  
  receiveMessage();