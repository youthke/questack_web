import {NextPage} from "next";
import React from "react";
import {WrappedSignIn} from "../../coponents/SignIn";

type Props = {}

const SignInPage: NextPage<Props> = () => {
    return(
        <div>
            <WrappedSignIn/>
        </div>
    )
};



export default SignInPage;