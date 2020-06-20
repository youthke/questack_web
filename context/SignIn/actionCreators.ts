import * as types from "./actionTypes"

export const throwRequest = () =>{
    return {type: types.THROW_POST_REQUEST}
};

export const changeMail = (mail: string)=>{
    return {type: types.CHANGE_MAIL, payload: {mail}}
};

export const changePassword = (password: string) =>{
    return {type: types.CHANGE_PASSWORD, payload: {password}}
};

export const success = (message: string) =>{
    return {type: types.SUCCESS, payload: {message}}
};

export const failed = (message: string) => {
    return {type: types.FAILED, payload: {message}}
};