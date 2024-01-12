import type { SendUserDataOutputDto } from "./output.dto";

export const transformSendUserDataResponseToModel = (
    params: SendUserDataOutputDto,
): any => {
    console.log(params);
    return {};
};