import * as React from "react";
import {initialState, reducer, State} from "./reducer";
import { setQuestions } from "./actionCreators";
import {Question} from "../../../model/question";

type ContextType = {
    setState: (questions: Question[]) => void;
    state: State
}

export const QuestionsContext = React.createContext<ContextType>({} as ContextType);


export const QuestionsContextProvider: React.FC = ({ children }) =>{
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setState = (questions: Question[]) =>{
        dispatch(setQuestions(questions));
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