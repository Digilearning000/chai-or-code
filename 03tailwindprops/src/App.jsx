import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mr-2 mb-4">
        Tailwind Text
      </h1>
      <Card username="Milan" btnTxt="Click me" />
      <Card username="Singh" />
    </>
  );
}

export default App;
