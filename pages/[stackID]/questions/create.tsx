import React from "react";
import {NextPage} from "next";
import {WrappedCreate} from "../../../components/questions/Create";

type Props = {}

const QuestionCreatePage: NextPage<Props> = ()  =>{
    return(
        <div>
            <WrappedCreate/>
        </div>
    )
};

export default QuestionCreatePage;