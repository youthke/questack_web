import * as React from "react";
import {initialState, reducer, State} from "./reducer";
import {changeQuestionerName, changeQuestionTitle, changeQuestionContent, throwRequest} from "./actionCreators"

type ContextType = {
    onChangeQuestionerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeQuestionTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeQuestionContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (questionerName: string, title: string, content: string) => void;
    state: State
}

export const QuestionCreateContext = React.createContext<ContextType>({} as ContextType);

export const QuestionCreateContextProvider: React.FC = ({ children})=>{
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const onChangeQuestionerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeQuestionerName(e.target.value))
    };

    const onChangeQuestionTitle = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(changeQuestionTitle(e.target.value))
    };

    const onChangeQuestionContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        dispatch(changeQuestionContent(e.target.value))
    };

    const onSubmit = (questionerName: string, title: string, content: string) =>{
        console.log("question", questionerName, title, content)
    };

    return (
        <QuestionCreateContext.Provider
            value={{
                onChangeQuestionerName,
                onChangeQuestionTitle,
                onChangeQuestionContent,
                onSubmit,
                state
            }}
        >
            {children}
        </QuestionCreateContext.Provider>
    )
};