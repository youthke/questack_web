import {initialState, reducer, State} from "./reducer";
import * as React from "react";
import {changeName} from "./actionCreators";
import {postRequest} from "./api";

type ContextType = {
    onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (name: string) => void;
    state: State
}

export const CreateStackContext = React.createContext<ContextType>({} as ContextType);

export const CreateStackProvider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(e.target.value));
    };
    const onSubmit = async (name: string) =>{
        const func = postRequest(name);
        await func(dispatch);
    };

    return (
        <CreateStackContext.Provider
            value={{
                onChangeName,
                onSubmit,
                state
            }}
        >
            {children}
        </CreateStackContext.Provider>
    )
};