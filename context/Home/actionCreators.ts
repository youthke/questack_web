import * as types from "./actionTypes"
import {Stack} from "../../model/stack";

export const setStacks = (stacks: Stack[]) =>{
    return {type: types.SET_STACKS, payload:{stacks}}
};
