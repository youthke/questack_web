import * as React from 'react'
import {SignUpProvider} from "./SignUp";

export const ContextProvider : React.FC<React.Props<{}>> = ({ children }) =>{
    return (
        <SignUpProvider>
            {children}
        </SignUpProvider>
    )
};