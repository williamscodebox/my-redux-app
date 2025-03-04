import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./app/features/counter/Counter";
import PostsList from "./app/features/post/PostsList";
import AddPostForm from "./app/features/post/AddPostForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {" "}
        <h1>Welcome</h1>
        <AddPostForm />
        <PostsList />
      </div>
    </>
  );
}

export default App;
