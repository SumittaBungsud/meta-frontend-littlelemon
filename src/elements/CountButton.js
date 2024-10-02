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
    <article
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        color: color,
      }}
    >
      <button
        style={{ marginRight: "7px", background: "none", border: "none" }}
        onClick={deductAmount}
      >
        <Icon size="2xl" icon={faSquareMinus} />
      </button>
      {counter}
      <button
        style={{ marginLeft: "7px", background: "none", border: "none" }}
        onClick={addAmount}
      >
        <Icon size="2xl" icon={faSquarePlus} />
      </button>
    </article>
  );
}

export default CountButton;
