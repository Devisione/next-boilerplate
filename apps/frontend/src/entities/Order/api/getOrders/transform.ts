import type { Order } from "../../model/types";
import type { GetOrdersOutputDto } from "./output.dto";

export const transformGetOrdersResponseToModel = (
  params: GetOrdersOutputDto,
): Order[] => {
  console.log(params);
  return [];
};
