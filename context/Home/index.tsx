import {Stack} from "../../model/stack";
import {initialState, reducer, State} from "./reducer";
import *  as  React from "react";
import {setStacks} from "./actionCreators";

type ContextType = {
    setState: (stack: Stack[]) => void;
    state: State;
}

export const HomeContext = React.createContext<ContextType>({} as ContextType);

export const HomeContextProvider: React.FC = ({children}) =>{
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const setState = (stacks: Stack[]) => {
        dispatch(setStacks(stacks));
    };
    return(
        <HomeContext.Provider value={{state, setState}}>
            {children}
        </HomeContext.Provider>
    )
}