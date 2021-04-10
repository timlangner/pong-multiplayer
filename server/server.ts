import WebSocket from "ws";
import { Game } from "./src/Game.js";
import { Player } from "./src/Player.js";

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 });

const game = new Game();

// client connected to websocket
wss.on("connection", (connection: WebSocket) => {
    const newPlayer = new Player(game, connection);

    game.addPlayer(newPlayer);
});
