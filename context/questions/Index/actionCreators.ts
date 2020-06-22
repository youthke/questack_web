import * as types from "./actionTypes"
import {Stack} from "../../../model/stack";

export const setStack = (stack: Stack)=>{
    return {type: types.SET_STACK, payload: { stack }};
};