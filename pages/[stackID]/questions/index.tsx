import {NextPage, NextPageContext} from "next";
import React from "react";
import {Index} from "../../../components/questions/Index";
import {Question, testQuestions} from "../../../model/question";
import {QuestionsContext} from "../../../context/questions/Index";

type Props = {
    questions: Question[]
}

const QuestionsPage: NextPage<Props> = (props:Props) => {
    const {setState} =  React.useContext(QuestionsContext)
    React.useEffect(()=>{
        setState(props.questions);
    })
    return (
        <div>
            <Index/>
        </div>
    )
};

QuestionsPage.getInitialProps = async (ctx:NextPageContext) =>{
    const questions: Question[] = testQuestions;

    return {
        questions
    }
}

export default QuestionsPage;