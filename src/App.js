import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(text.length);
  }, [text]);

  return (
    <div className="App">
      <h1>useEffect</h1>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <h3>You Entered: {text}</h3>
      <h4>Number of alphabets: {num}</h4>
      <p>
        useEffect( ()=>{} , [var1,var2...] ) gets called eachtime value of any
        element in array changes.
      </p>
    </div>
  );
}
