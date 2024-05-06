//Set Up MongoDB:
  //Create a MongoDB database to store chat messages. Define a Mongoose schema for messages and set up a MongoDB connection in your app.js.
//Implement Socket.IO:
  //Use Socket.IO to handle real-time communication between clients and the server.
      io.on('connection', (socket) => {
    console.log('New client connected');

    // Handle chat messages
    socket.on('chat message', (message) => {
        // Save message to MongoDB
        // Broadcast message to all connected clients
        io.emit('chat message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
