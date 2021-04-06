import React, {useEffect, useState, useRef} from 'react';
import './App.scss';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');

      if (renderCtx) {
        setContext(renderCtx);
      }
    }

    // Draw paddles
    if (context) {
      // player 1
      context.fillRect(5, 250, 10, 75);

      // player 2
      context.fillRect(985, 250, 10, 75);
    }
  }, [context]);

  return (
    <div className="app">
      <canvas
        className="canvas"
        ref={canvasRef}
        width={1000}
        height={500}
        />
    </div>
  );
}

export default App;
