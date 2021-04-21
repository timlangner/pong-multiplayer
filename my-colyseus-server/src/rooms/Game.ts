import { Client, Room } from "colyseus";
import { GAME_HEIGHT, GAME_WIDTH } from "../constants/dimensions";
import { PositionUpdateMessage } from "./messages/PositionUpdateMessage";
import { GameState, PlayerState } from "./schema/GameState";

export class Game extends Room<GameState> {
  onCreate(options: any) {
    this.setState(new GameState());

    this.setSimulationInterval(() => {
      const { ballState } = this.state;
      const { xDelta, yDelta } = ballState;

      ballState.x += xDelta;
      ballState.y += yDelta;

      if (ballState.y < 0 || ballState.y > GAME_HEIGHT - 15) {
        ballState.yDelta = -yDelta;
      }

      if (ballState.x < 0 || ballState.x > GAME_WIDTH - 15) {
        ballState.xDelta = -xDelta;
      }
    });

    this.onMessage(
      "POSITION_UPDATE",
      (client, message: PositionUpdateMessage) => {
        const currentPlayer = this.state.playerStates.get(client.sessionId);

        currentPlayer.y = message.y;
      }
    );
  }

  onJoin(client: Client, options: any) {
    const playerState = new PlayerState();

    this.state.playerStates.set(client.sessionId, playerState);

    console.log(client.sessionId, "joined!");
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
