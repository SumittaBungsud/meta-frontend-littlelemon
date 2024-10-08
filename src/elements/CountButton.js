import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { DeliContext } from "../sources/contexts/DeliProvider";

function CountButton({ color, deductCallback, addCallback, id }) {
  const [counter, setCounter] = useState(0);
  const { foodList } = useContext(DeliContext);

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

  useEffect(() => {
    const amount = foodList.find((item) => item.id === id);
    if (amount) {
      setCounter(amount.amount);
    } else {
      setCounter(0);
    }
  }, [foodList]);

  return (
    <section
      className="count-container"
      style={{
        color: color,
      }}
    >
      <button
        className="count-button"
        onClick={() => {
          deductCallback();
          deductAmount();
        }}
        role="button"
        aria-label="adding item button"
      >
        <Icon size="2xl" icon={faSquareMinus} />
      </button>
      {counter || 0}
      <button
        className="count-button"
        onClick={() => {
          addCallback();
          addAmount();
        }}
        role="button"
        aria-label="deducting item button"
      >
        <Icon size="2xl" icon={faSquarePlus} />
      </button>
    </section>
  );
}

export default CountButton;
