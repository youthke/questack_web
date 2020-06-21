import * as React from 'react'
import {SignUpProvider} from "./SignUp";
import {SignInContextProvider} from "./SignIn";
import {QuestionCreateContextProvider} from "./questions/Create";
import {QuestionsContextProvider} from "./questions/Index";
import {HomeContextProvider} from "./Home";
import {CreateStackProvider} from "./stacks/create";

export const ContextProvider : React.FC<React.Props<{}>> = ({ children }) =>{
    return (
        <SignUpProvider>
            <SignInContextProvider>
                <QuestionCreateContextProvider>
                    <QuestionsContextProvider>
                        <HomeContextProvider>
                            <CreateStackProvider>
                                {children}
                            </CreateStackProvider>
                        </HomeContextProvider>
                    </QuestionsContextProvider>
                </QuestionCreateContextProvider>
            </SignInContextProvider>
        </SignUpProvider>
    )
};