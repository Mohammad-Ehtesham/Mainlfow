import { useState } from "react";
import "./App.css";
import HandleButton from "./components/Button";
import Display from "./components/Display";

function App() {
  const [calval, setclaval] = useState("");

  const Buttontext = (Buttonval) => {
    if (Buttonval === "C") {
      setclaval("");
    } else if (Buttonval === "=") {
      let result;
      result = eval(calval);
      setclaval(result);
    } else if (Buttonval === "x") {
      let value = calval;
      if (value.length > 0) {
        value = value.substring(0, value.length - 1);
      }
      setclaval(value);
    } else {
      let newval = calval + Buttonval;
      setclaval(newval);
    }
  };
  return (
    <>
      <div class="card container-cal" style={{ width: "30rem" }}>
        <Display display={calval} />
        <HandleButton Buttonclick={Buttontext} />
      </div>
    </>
  );
}

export default App;
