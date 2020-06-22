import * as React from "react";
import {initialState, reducer, State} from "./reducer";
import {setStack} from "./actionCreators";
import {Stack} from "../../../model/stack";

type ContextType = {
    setState: (stack: Stack) => void;
    state: State
}

export const QuestionsContext = React.createContext<ContextType>({} as ContextType);


export const QuestionsContextProvider: React.FC = ({ children }) =>{
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setState = (stack: Stack) =>{
        dispatch(setStack(stack));
    };

    return(
        <QuestionsContext.Provider
            value={
                {
                    setState,
                    state
                }
            }
        >
            {children}
        </QuestionsContext.Provider>
    )
};