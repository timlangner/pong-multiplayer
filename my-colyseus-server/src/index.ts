import { monitor } from "@colyseus/monitor";
import { Server } from "colyseus";
import express from "express";
import { createServer } from "http";
import { Game } from "./rooms/Game";
const port = Number(process.env.port) || 3000;

const app = express();
app.use(express.json());

const gameServer = new Server({
  server: createServer(app),
});

app.use("/colyseus", monitor());

gameServer.define("my_room", Game);

gameServer.listen(port);
