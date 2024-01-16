import { transformGetOrdersResponseToModel } from "./transform";
import type { Order } from "../../model/types";
import type { GetOrdersInputDto } from "./input.dto";

const getOrders = async (inputDto: GetOrdersInputDto): Promise<Order[]> => {
  console.log(inputDto);
  return new Promise((res) => {
    res(transformGetOrdersResponseToModel({}));
  });
};

export default getOrders;
