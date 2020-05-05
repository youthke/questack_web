import {NextPage} from "next";
import React from "react";
import { WrappedSignUp } from "../../components/SignUp";

type Props = {}

const FirstPage: NextPage<Props> = () => {
    return(
        <div>
            <WrappedSignUp/>
        </div>
    )
};



export default FirstPage;
