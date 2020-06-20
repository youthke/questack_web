import * as React from 'react'
import {SignUpProvider} from "./SignUp";
import {SignInContextProvider} from "./SignIn";
import {QuestionCreateContextProvider} from "./questions/Create";
import {QuestionsContextProvider} from "./questions/Index";
import {HomeContextProvider} from "./Home";

export const ContextProvider : React.FC<React.Props<{}>> = ({ children }) =>{
    return (
        <SignUpProvider>
            <SignInContextProvider>
                <QuestionCreateContextProvider>
                    <QuestionsContextProvider>
                        <HomeContextProvider>
                            {children}
                        </HomeContextProvider>
                    </QuestionsContextProvider>
                </QuestionCreateContextProvider>
            </SignInContextProvider>
        </SignUpProvider>
    )
};