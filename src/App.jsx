import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calval, setcalval] = useState("");

  function onclicked(buttonName) {
    if (buttonName === "C") {
      setcalval(" ");
    } else if (buttonName === "=") {
      const el = eval(calval);
      setcalval(el);
    } else if (buttonName === "-") {
      const subval = calval - buttonName;
      setcalval(subval);
    } else if (buttonName === "*") {
      const mulval = calval * buttonName;
      setcalval(mulval);
    } else if (buttonName === "/") {
      const divval = calval / buttonName;
      setcalval(divval);
    } else {
      const addval = calval + buttonName;
      setcalval(addval);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayvalue={calval}></Display>
      <ButtonsContainer onbuttonclick={onclicked}></ButtonsContainer>
    </div>
  );
}

export default App;
