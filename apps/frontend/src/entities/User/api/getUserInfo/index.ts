import { transformGetUserInfoResponseToModel } from "./transform";
import type { User } from "../../model/types";
import type { GetUserInfoInputDto } from "./input.dto";
import type { GetUserInfoOutputDto } from "./output.dto";

const getUserInfo = async (inputDto: GetUserInfoInputDto): Promise<User> => {
  const request = new Promise<GetUserInfoOutputDto>((res) => {
    console.log(inputDto);

    setTimeout(() => {
      res({ userName: "user1", avatar: "qwefqwef" });
    }, 300);
  });

  const response = await request;

  return transformGetUserInfoResponseToModel(response);
};

export default getUserInfo;
