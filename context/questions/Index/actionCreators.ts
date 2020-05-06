import * as types from "./actionTypes"
import {Question} from "../../../model/question";

export const setQuestions = (questions: Question[])=>{
    return {type: types.SET_QUESTIONS, payload: { questions }};
};