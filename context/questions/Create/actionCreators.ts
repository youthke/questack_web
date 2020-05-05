import * as types from "./actionTypes"

export const throwRequest = () =>{
    return {type: types.THROW_POST_REQUEST}
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
