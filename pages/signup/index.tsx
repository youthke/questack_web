import {NextPage} from "next";
import React from "react";
import { WrappedSignUp } from "../../components/SignUp";
import {SignUpContext} from "../../context/SignUp";
import Router from "next/router";

type Props = {}

const FirstPage: NextPage<Props> = () => {
    const {state} = React.useContext(SignUpContext);
    React.useEffect(()=>{
        const func = async () =>{
            if (state.success){
                await Router.push("/home")
            }
        };
        func()
    },[state.success]);
    return(
        <div>
            <WrappedSignUp/>
        </div>
    )
};



export default FirstPage;
