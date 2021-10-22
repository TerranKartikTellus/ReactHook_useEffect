import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [num, setNum] = useState(0);
  const [{ x, y }, setxyz] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setNum(text.length);
  }, [text]);

  useEffect(() => {
    const send = (e) => {
      setxyz({
        x: e.screenX,
        y: e.screenY
      });
    };
    window.addEventListener("mousemove", send);
  }, [x, y]);

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
        useEffect( ()={} , [var1,var2...] ) gets called eachtime value of any
        element in array changes.
      </p>
      <br />
      <br />
      <h1>Applications : </h1>
      <h2>
        Mouse x:{x} , y:{y}{" "}
      </h2>
    </div>
  );
}
