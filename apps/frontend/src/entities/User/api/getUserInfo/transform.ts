import type { User } from "../../model/types";
import type { GetUserInfoOutputDto } from "./output.dto";

export const transformGetUserInfoResponseToModel = (
  params: GetUserInfoOutputDto,
): User => {
  return { full_name: params.userName, avatar: params.avatar };
};