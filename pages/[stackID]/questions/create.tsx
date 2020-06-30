import React from "react";
import {NextPage, NextPageContext} from "next";
import {WrappedCreate} from "../../../components/questions/Create";
import {QuestionCreateContext} from "../../../context/questions/Create";
import Router from "next/router";

type Props = {
    id: string;
}

const QuestionCreatePage: NextPage<Props> = (props: Props)  =>{
    const {setID, state} = React.useContext(QuestionCreateContext);
    React.useEffect(() => {
        setID(props.id)
    },[]);
    React.useEffect(() => {
        if(state.success){
            Router.push(`/questack/${props.id}/questions`)
        }
    },[state.success]);
    return(
        <div>
            <WrappedCreate/>
        </div>
    )
};

QuestionCreatePage.getInitialProps = async (ctx:NextPageContext) => {
    const {stackID} = ctx.query;
    return {
        id: stackID as string
    };
};

export default QuestionCreatePage;