import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./app/features/counter/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {" "}
        <h1>Welcome</h1>
        <Counter />
      </div>
    </>
  );
}

export default App;
