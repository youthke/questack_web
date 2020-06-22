import * as React from "react";
import {initialState, reducer, State} from "./reducer";
import {changeName, setToken} from "./actionCreators";
import {postRequest} from "./api";

type ContextType = {
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (name: string, token: string) => void;
    onSetToken: (token: string) => void;
    state: State
}

export const CreateStackContext = React.createContext<ContextType>({} as ContextType);

export const CreateStackProvider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(e.target.value));
    };
    const onSubmit = async (name: string, token: string) =>{
        const func = postRequest(name, token);
        await func(dispatch);
    };

    const onSetToken = (token: string) =>{
        dispatch(setToken(token));
    }
    return (
        <CreateStackContext.Provider
            value={{
                onChangeName,
                onSubmit,
                onSetToken,
                state
            }}
        >
            {children}
        </CreateStackContext.Provider>
    )
};