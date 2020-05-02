import * as React from 'react'
import {SignUpProvider} from "./SignUp";
import {SignInContextProvider} from "./SignIn";

export const ContextProvider : React.FC<React.Props<{}>> = ({ children }) =>{
    return (
        <SignUpProvider>
            <SignInContextProvider>
                {children}
            </SignInContextProvider>
        </SignUpProvider>
    )
};