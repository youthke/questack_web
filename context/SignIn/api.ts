import {throwRequest} from "./actionCreators";
import {Axios} from "../../api/config";
import {failed, success} from "./actionCreators";
import {SignInMessage} from "./message";
import Cookies from "js-cookie";

type Payload = {
    mail: string;
    password: string;
}

type response = {
    token: string;
    message: string;
};

export const signIn = (mail: string, password: string) => {
    return async (dispatch: (value: any) => void) =>{
        try {
            dispatch(throwRequest());
            const payload: Payload = {
                mail: mail,
                password: password
            };
            const resp = await Axios.post<response>("/sign-in", payload);
            const time = new Date();
            const t = time.getTime();
            time.setTime(t + 1000 * 60 * 60);
            Cookies.remove("questack_token");
            console.log(resp.data.token);
            Cookies.set("questack_token", resp.data.token, { expires: time });
            dispatch(success(SignInMessage.success))
        }catch(e) {
            dispatch(failed(SignInMessage.error))
        }
    }
};