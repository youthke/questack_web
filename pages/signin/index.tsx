import {NextPage} from "next";
import React from "react";
import {WrappedSignIn} from "../../components/SignIn";
import {SignInContext} from "../../context/SignIn";
import Router from "next/router";

type Props = {}

const SignInPage: NextPage<Props> = () => {
    const {state} = React.useContext(SignInContext);
    React.useEffect(() =>{
        const func = async () => {
            if (state.success){
              await Router.push("/questack/home");
            }
        };
        func()
    },[state.success]);
    return(
        <div>
            <WrappedSignIn/>
        </div>
    );
};



export default SignInPage;