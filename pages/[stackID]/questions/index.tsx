import {NextPage, NextPageContext} from "next";
import React from "react";
import {Index} from "../../../components/questions/Index";
import {QuestionsContext} from "../../../context/questions/Index";
import {Stack} from "../../../model/stack";
import {getStack} from "../../../api/getStack";

type Props = {
    stack: Stack
}

const QuestionsPage: NextPage<Props> = (props:Props) => {
    const {setState} =  React.useContext(QuestionsContext);
    React.useEffect(()=>{
        setState(props.stack);
    },[]);
    return (
        <div>
            <Index/>
        </div>
    )
};

QuestionsPage.getInitialProps = async (ctx:NextPageContext) =>{
    const {stackID} = ctx.query;
    const result = await getStack(stackID as string);
    return {
        stack: result.stack
    }
};

export default QuestionsPage;