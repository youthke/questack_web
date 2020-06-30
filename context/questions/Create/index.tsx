import * as React from "react";
import {initialState, reducer, State} from "./reducer";
import {
    changeQuestionerName,
    changeQuestionTitle,
    changeQuestionContent,
    setStackID
} from "./actionCreators"
import {createQuestion} from "./api";

type ContextType = {
    setID: (id: string) => void;
    onChangeQuestionerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeQuestionTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeQuestionContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (stackID: string, questionerName: string, title: string, content: string) => void;
    state: State
}

export const QuestionCreateContext = React.createContext<ContextType>({} as ContextType);

export const QuestionCreateContextProvider: React.FC = ({ children})=>{
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setID = (id: string) => {
        dispatch(setStackID(id))
    };

    const onChangeQuestionerName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeQuestionerName(e.target.value))
    };

    const onChangeQuestionTitle = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(changeQuestionTitle(e.target.value))
    };

    const onChangeQuestionContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        dispatch(changeQuestionContent(e.target.value))
    };

    const onSubmit = async (stackID: string, questionerName: string, title: string, content: string) => {
        const func = createQuestion(stackID, questionerName, title, content);
        await func(dispatch)
    };

    return (
        <QuestionCreateContext.Provider
            value={{
                setID,
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