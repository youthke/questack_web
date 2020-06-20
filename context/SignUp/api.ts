import {failed, success, throwRequest} from "./actionCreators";
import {Axios} from "../../api/config";
import {SignUPMessage} from "./message";

type Payload = {
    name: string;
    mail: string;
    password: string;
}

export const signUp = (name: string , mail: string, password: string) =>{
    return async (dispatch : (value: any) => void) =>{
        try{
            dispatch(throwRequest());
            const payload: Payload = {
                name: name,
                mail: mail,
                password: password
            };

            await Axios.post("/user", payload);
            dispatch(success(SignUPMessage.success))
        }catch (e) {
            dispatch(failed(SignUPMessage.error))
        }
    }

};