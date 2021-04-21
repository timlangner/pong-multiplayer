import { MapSchema, Schema, type } from "@colyseus/schema";
import { GAME_HEIGHT, GAME_WIDTH } from "../../constants/dimensions";

export class BallState extends Schema {
  @type("number")
  x: number = GAME_WIDTH / 2;

  @type("number")
  y: number = GAME_HEIGHT / 2;

  @type("number")
  xDelta: number = 2;

  @type("number")
  yDelta: number = 2;
}

export class PlayerState extends Schema {
  @type("number")
  y: number = GAME_HEIGHT / 2;
}

export class GameState extends Schema {
  @type(BallState)
  ballState: BallState = new BallState();

  @type({ map: PlayerState })
  playerStates = new MapSchema<PlayerState>();
}
