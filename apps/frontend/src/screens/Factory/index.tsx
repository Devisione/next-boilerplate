import React from "react";
import { useUnit } from "effector-react/compat";
import {
  firstCounterFactory,
  secondCounterFactory,
} from "@screens/Factory/model/store";

const FactoryPage = () => {
  const {
    firstCounter,
    firstCounterIncrement,
    firstCounterDecrement,
    secondCounter,
    secondCounterIncrement,
    secondCounterDecrement,
  } = useUnit({
    firstCounter: firstCounterFactory.$counter,
    firstCounterIncrement: firstCounterFactory.increment,
    firstCounterDecrement: firstCounterFactory.decrement,
    secondCounter: secondCounterFactory.$counter,
    secondCounterIncrement: secondCounterFactory.increment,
    secondCounterDecrement: secondCounterFactory.decrement,
  });
  return (
    <>
      <div style={{ marginTop: 40 }}>
        <div>Cчетчик первой фабрики {firstCounter}</div>
        <button onClick={firstCounterIncrement}>Увеличить</button>
        <button onClick={firstCounterDecrement}>Уменьшить</button>
      </div>
      <div style={{ marginTop: 40 }}>
        <div>Cчетчик второй фабрики {secondCounter}</div>
        <button onClick={secondCounterIncrement}>Увеличить</button>
        <button onClick={secondCounterDecrement}>Уменьшить</button>
      </div>
    </>
  );
};

export default FactoryPage;
