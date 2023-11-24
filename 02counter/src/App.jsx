import { useState } from "react";

function App() {
  // let counter = 10;

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // console.log("clicked", counter);
    // counter++;

    if (counter < 5) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value = {counter}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>remove</button>
    </>
  );
}

export default App;
