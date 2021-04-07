import React, {useEffect, useRef} from 'react';
import Canvas from "./canvas/Canvas";
import './app.scss';

const App = () => {
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8999');

    ws.current.onopen = () => {
      console.log('connected');
    }

    ws.current.onmessage = (evt) => {
      // Get coordinates for second paddle back
    }

    ws.current.onclose = () => {
      console.log('disconnected');
    }
  });

  return (
    <Canvas />
  );
}

export default App;
