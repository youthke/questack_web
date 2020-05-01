import * as types from "./actionTypes"

export const throwRequest = () =>{
    return {type: types.THROW_REQUEST}
};

export const changeName = (name: string) =>{
    return {type: types.CHANGE_NAME, payload: {name} }
};
export const changeMail = (mail: string) =>{
    return {type: types.CHANGE_MAIL, payload: {mail}}
};

export const changePassword = (password: string) =>{
    return {type: types.CHANGE_PASSWORD, payload: {password}}
};

export const changePasswordConfirmation = (passwordConfirmation: string) =>{
    return {type: types.CHANGE_PASSWORD_CONFIRMATION, payload: {passwordConfirmation}}
};