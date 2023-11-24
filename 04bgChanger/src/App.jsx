import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="flex-nowrap">
          <button
            onClick={() => setColor("red")}
            className="m-20 bg-red-300 p-2 rounded-lg"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="m-20 bg-blue-200 p-2 rounded-lg"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="m-20 bg-yellow-400 p-2 rounded-lg"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="m-20 bg-green-400 p-2 rounded-lg"
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
