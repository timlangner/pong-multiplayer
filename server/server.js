const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

// active clients
let activeConnections = new Set();

// client connected to websocket
wss.on("connection", (ws) => {
    // Add current connection to set with all connections
    activeConnections.add(ws);

    // Send confirmation message
    ws.send(JSON.stringify({ type: "CONNECTED" }));

    // Check for incoming messages
    ws.on("message", (message) => {
        activeConnections.forEach((activeConnection) => {
            // Check if connection comes from other client
            if (activeConnection !== ws) {
                activeConnection.send(message);
            }
        });

        console.log("received: %s", message);
    });
});

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port}`);
});
