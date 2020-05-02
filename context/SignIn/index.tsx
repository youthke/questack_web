import * as React from "react";
import {initialState, reducer, State} from "./reducer";
import {changeMail,changePassword, throwRequest} from "./actionCreators"



type ContextType = {
    onChangeMail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (mail: string, password: string) => void;
    state: State
}

const SignInContext = React.createContext<ContextType>({} as ContextType);

export const SignInContextProvider: React.FC = ({ children })=>{
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const onChangeMail  = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(changeMail(e.target.value))
    };
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(changePassword(e.target.value));
    };

    const onSubmit = (mail: string, password: string) =>{
        console.log("at submit", mail, password)
    }

    return (
        <SignInContext.Provider
        value={
            {
                onChangeMail,
                onChangePassword,
                onSubmit,
                state
            }
        }
        >
            {children}
        </SignInContext.Provider>
    )

}