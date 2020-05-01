import * as React from 'react'

export const ContextProvider : React.FC<React.Props<{}>> = ({ children }) =>{
    return (
        <>
            {children}
            </>
    )
};