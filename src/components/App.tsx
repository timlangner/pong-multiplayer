import React, {useEffect, useState, useRef} from 'react';
import './App.scss';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  React.useEffect(() => {

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
