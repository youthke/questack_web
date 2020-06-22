import * as types from "./actionTypes";

export const throwRequest = () =>{
    return {type: types.THROW_REQUEST};
};

export const changeName = (name: string) =>{
    return {type: types.CHANGE_NAME, payload: {name} };
};

export const success = (message: string) =>{
    return {type: types.SUCCESS, payload: {message}}
};

export const failed = (message: string) => {
    return {type: types.FAILED, payload: {message}}
};

export const setToken = (token: string) => {
    return {type: types.SET_TOKEN, payload: {token}}
}