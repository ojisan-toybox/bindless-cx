import { useState } from "react";
import styles from "./app.module.css";
import { Bindless } from "./bind-less";
import { SubmitButton } from "./SubmitButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SubmitButton hoge={true} fuga={true} />
      <SubmitButton hoge={false} fuga={true} />
      <SubmitButton hoge={true} fuga={false} />
      <Bindless hoge={true} fuga={true} />
      <Bindless hoge={false} fuga={true} />
      <Bindless hoge={true} fuga={false} />
    </div>
  );
}

export default App;
