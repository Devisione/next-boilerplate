import { sleep } from "@shared/utils/promise";
import type { User } from "../../model/types";
import { transformGetUserInfoResponseToModel } from "./transform";
import type { GetUserInfoInputDto } from "./input.dto";
import type { GetUserInfoOutputDto } from "./output.dto";


const getUserInfo = async (inputDto: GetUserInfoInputDto): Promise<User> => {
  const request = new Promise<GetUserInfoOutputDto>((res) => {
    console.log(inputDto);
    res({ userName: "user1", avatar: "qwefqwef" });
  });

  const response = await request;
  await sleep(100);

  return transformGetUserInfoResponseToModel(response);
};

export default getUserInfo;