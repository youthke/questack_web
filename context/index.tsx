import * as React from 'react'
import {SignUpProvider} from "./SignUp";
import {SignInContextProvider} from "./SignIn";
import {QuestionCreateContextProvider} from "./questions/Create";

export const ContextProvider : React.FC<React.Props<{}>> = ({ children }) =>{
    return (
        <SignUpProvider>
            <SignInContextProvider>
                <QuestionCreateContextProvider>
                    {children}
                </QuestionCreateContextProvider>
            </SignInContextProvider>
        </SignUpProvider>
    )
};