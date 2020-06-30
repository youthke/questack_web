import * as types from "./actionTypes"
import {message} from "antd";

export const throwRequest = () =>{
    return {type: types.THROW_POST_REQUEST}
};

export const setStackID = (id: string) => {
    return {type: types.CREATE_QUESTION_SET_STACK_ID, payload: {id}}
};

export const changeQuestionContent = (content: string) =>{
    return {type: types.CHANGE_QUESTION_CONTENT, payload: { content } };
};

export const changeQuestionTitle = (title: string) =>{
    return {type: types.CHANGE_QUESTION_TITLE, payload: { title }};
};

export const changeQuestionerName = (name: string) =>{
    return {type: types.CHANGE_QUESTIONER_NAME, payload: { name } };
};

export const success = (message: string) => {
    return {type: types.SUCCESS, payload:{message}}
};

export const failed = (message: string) => {
    return {type: types.FAILED, payload:{message}}
};