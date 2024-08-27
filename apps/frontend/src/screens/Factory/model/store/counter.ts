import { createFactory } from "@withease/factories";
import { createEvent, createStore, sample } from "effector";

export const createCounter = createFactory(() => {
  const $counter = createStore(0);

  const increment = createEvent();
  const decrement = createEvent();

  sample({
    clock: increment,
    source: $counter,
    fn: (counter) => counter + 1,
    target: $counter,
  });

  sample({
    clock: decrement,
    source: $counter,
    fn: (counter) => counter - 1,
    target: $counter,
  });

  return {
    $counter,
    increment,
    decrement,
  };
});
