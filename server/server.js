const express = require('express');
const http = require("http");
const WebSocket = require('ws');

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {

    //send immediatly a feedback to the incoming connection
    ws.send('connected');

    ws.isAlive = true;

    ws.on('pong', () => {
        ws.isAlive = true;
    });

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    setInterval(() => {
        wss.clients.forEach((ws) => {

            if (!ws.isAlive) return ws.terminate();

            ws.isAlive = false;
            ws.ping(null, false, true);
        });
    }, 10000);
});

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port}`);
});