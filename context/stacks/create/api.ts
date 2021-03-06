import {Axios} from "../../../api/config";
import {failed, success} from "./actionCreators";
import {CreateStackMessage} from "./message";


type Payload = {
    name: string
}

export const postRequest = (name: string, token: string) => {
    return async (dispatch: (value: any) => void) =>{
        try{
        const payload: Payload = {
            name: name
        };
            await Axios.post("/stack", payload,{
                headers: {
                    Authorization: token
                }
        });
        dispatch(success(CreateStackMessage.success));
        }catch (e) {
            dispatch(failed(CreateStackMessage.error));
        }
    };
};