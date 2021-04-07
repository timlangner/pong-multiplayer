import React, {useEffect, useRef, useState} from 'react';
import Canvas from "./canvas/Canvas";
import './app.scss';

type PaddlePosition = {
  x: number;
  y: number;
}

const App = () => {
  const [enemyPosition, setEnemyPosition] = useState<PaddlePosition>({ x: 985, y: 200 })
  const [ws] = useState<WebSocket>(() => new WebSocket('ws://localhost:8999'));

  useEffect(() => {

    ws.onopen = () => {
      console.log('connected');
    }

    ws.onmessage = (evt: any) => {
      // Get coordinates for second paddle back
      console.log(evt);
    }

    ws.onclose = () => {
      console.log('disconnected');
    }
  });

  return (
    <Canvas ws={ws} />
  );
}

export default App;
