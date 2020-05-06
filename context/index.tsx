import * as React from 'react'
import {SignUpProvider} from "./SignUp";
import {SignInContextProvider} from "./SignIn";
import {QuestionCreateContextProvider} from "./questions/Create";
import {QuestionsContextProvider} from "./questions/Index";

export const ContextProvider : React.FC<React.Props<{}>> = ({ children }) =>{
    return (
        <SignUpProvider>
            <SignInContextProvider>
                <QuestionCreateContextProvider>
                    <QuestionsContextProvider>
                        {children}
                    </QuestionsContextProvider>
                </QuestionCreateContextProvider>
            </SignInContextProvider>
        </SignUpProvider>
    )
};