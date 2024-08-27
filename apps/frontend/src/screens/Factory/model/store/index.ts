import { invoke } from "@withease/factories";
import { createCounter } from "@screens/Factory/model/store/counter";

export const firstCounterFactory = invoke(createCounter);
export const secondCounterFactory = invoke(createCounter);
