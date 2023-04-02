import { UserData } from "../../ts/interfaces/process-data.interface";

const processData = (data: UserData[]) => {
    return `Hi i am ${data[0].name} and i got fetched from an api.`;
}

export default processData
