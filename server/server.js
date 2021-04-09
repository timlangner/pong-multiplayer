import WebSocket from "ws";
import { Game } from "./src/Game.js";
import { Player } from "./src/Player.js";
import express from "express";
import http from "http";

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 });

const game = new Game();

// client connected to websocket
wss.on("connection", (connection) => {
    const newPlayer = new Player(game, connection);

    game.addPlayer(newPlayer);
});

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port}`);
});
