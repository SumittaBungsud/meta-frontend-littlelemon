import React, { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";

function CountButton({ color }) {
  const [counter, setCounter] = useState(0);

  const addAmount = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const deductAmount = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <fragment
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        color: color,
      }}
    >
      <fragment style={{ marginRight: "7px" }} onClick={deductAmount}>
        <Icon size="2xl" icon={faSquareMinus} />
      </fragment>
      {counter}
      <fragment style={{ marginLeft: "7px" }} onClick={addAmount}>
        <Icon size="2xl" icon={faSquarePlus} />
      </fragment>
    </fragment>
  );
}

export default CountButton;
