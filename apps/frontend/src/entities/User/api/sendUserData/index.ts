import { transformSendUserDataResponseToModel } from "./transform";
import type { SendUserDataInputDto } from "./input.dto";

const sendUserData = async (inputDto: SendUserDataInputDto): Promise<any> => {
    console.log(inputDto);
    return new Promise((res) => {
        res(transformSendUserDataResponseToModel({}));
    });
};

export default sendUserData;